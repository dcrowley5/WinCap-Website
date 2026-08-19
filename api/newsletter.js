// Serverless proxy for the Substack RSS feed.
//
// The feed at wincap.substack.com/feed sends no Access-Control-Allow-Origin
// header, so a browser on our own domain is not allowed to read it directly.
// This runs on Vercel, fetches it server side where CORS does not apply, and
// hands the XML back from our own origin. The cache headers mean Vercel's edge
// serves nearly every visitor without touching Substack.
const FEED = 'https://wincap.substack.com/feed';

module.exports = async (req, res) => {
  try {
    const upstream = await fetch(FEED, {
      headers: { 'user-agent': 'wincap-website-newsletter/1.0' }
    });

    if (!upstream.ok) {
      res.status(502).json({ error: 'The newsletter feed responded ' + upstream.status });
      return;
    }

    const xml = await upstream.text();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    // Half an hour fresh at the edge, then serve stale for a day while
    // revalidating, so a Substack outage never blanks the page.
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400');
    res.status(200).send(xml);
  } catch (err) {
    res.status(502).json({ error: 'Could not reach the newsletter feed.' });
  }
};
