  // In-page tabs: scroll within the page instead of letting the browser
  // follow the "#" link (which redirects out of the preview sandbox).
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      (target || document.body).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

  // Biographies are reproduced from the advisor profiles on wincapfinancial.com.
  //
  // linkedin / booking: paste each person's URL here. booking is whatever
  // calendar that person uses -- Calendly or a Google appointment page -- and
  // leaving it as '' hides the scheduling button and drops them from the
  // "Who would you like to talk to?" picker.
  const team = [
    {name:'Michael Collins', creds:'CFA', role:'Founder &amp; CEO', slug:'michael-collins',
     linkedin:'https://www.linkedin.com/in/michaelcollinspm/', booking:'https://calendly.com/wincapfinancial',
     email:'mcollins@wincapfinancial.com', phone:'617-936-8060', bio:[
      "Michael Collins, CFA has worked in Wealth Management since 2012 with roles at Northern Trust and CAPTRUST. Prior to that Michael worked in various roles in Institutional Investment Management since starting his career at State Street in 2005. He has a depth of expertise in financial planning and investment management which he leverages to enhance client outcomes.",
      "Michael is a Chartered Financial Analyst (CFA) and a Fiduciary, which requires him to always act in the best interest of his clients. Michael also has his Masters Degree in Finance from Suffolk University",
      "Michael currently teaches at Endicott College and Bunker Hill Community College where he educates students about the intricacies of the market and the basic fundamentals used by professionals to evaluate the economy. Additionally, Michael has joined the CFA Board's Program Education &amp; Advisory Council as of 2025. Here, Michael looks to give back to the organization that has helped shape his professional career."
    ]},
    {name:'Zach Ciampa', creds:'CFP&reg;, RICP&reg;, ChFC&reg;, BFA&trade;', role:'Head of Financial Planning', slug:'zach-ciampa',
     linkedin:'https://www.linkedin.com/in/zachary-ciampa-cfp%C2%AE-ricp%C2%AE-chfc%C2%AE-bfa%E2%84%A2-a5924bb5/', booking:'https://calendly.com/zciampa',
     email:'zciampa@wincapfinancial.com', phone:'978-775-3790', bio:[
      "Zach Ciampa brings 10 years of comprehensive experience in the financial services industry. His journey started at Fidelity Investments, where his focus was on investment planning. Subsequently, he enriched his skills during his time at Charles Schwab before contributing his insights as a financial planner at John Hancock. Through these experiences, Zach has honed his expertise to guide clients toward their financial goals.",
      "Zach is a CERTIFIED FINANCIAL PLANNER&trade; professional, Retirement Income Certified Professional&reg;, Chartered Financial Consultant&reg;, and Behavioral Finance Advisor&trade;. These certifications underscore his commitment to upholding the highest standards of professionalism and ethics. As a fiduciary, he ensures that clients receive advice which aligns with their best interests. Zach also earned his Bachelor's degree in Communications, with a minor in business, from Arizona State University."
    ]},
    {name:'Luke Pavlatos', creds:'CFP&reg;', role:'Senior Wealth Manager', slug:'luke-pavlatos',
     linkedin:'https://www.linkedin.com/in/luke-pavlatos-cfp%C2%AE-5b010bb4/', booking:'https://calendly.com/lpavlatos-wincapfinancial',
     email:'lpavlatos@wincapfinancial.com', phone:'617-616-8804', bio:[
      "Luke Pavlatos is a CERTIFIED FINANCIAL PLANNER&trade; practitioner and has been in the financial services industry since 2016. Prior to bringing his services to WinCap Financial, Luke worked for John Hancock, where he wore a couple different hats. In his first stint with John Hancock, he specialized in employer qualified plans and tax-advantaged accounts. He later took on a more comprehensive position as a Senior Financial Consultant. It was in this role that Luke and Zach first teamed up to help clients meet their goals. Luke focused on the investment planning, executed transactions, and managed the relationship with clients, while Zach performed the financial planning and retirement projections.",
      "As a CFP&reg;, Luke is also bound by his fiduciary duty to put the clients' interests above all else. In addition, as someone who is originally from a small town in the Midwest, Luke learned at a young age that trust and relationships are of utmost importance, and carries this with him into the business world. Luke has a Bachelor's degree in Economics from Denison University."
    ]},
    {name:'Joseph Lepore', role:'Senior Wealth Manager', slug:'joseph-lepore',
     linkedin:'https://www.linkedin.com/in/joseph-l-3303808a/', booking:'https://calendly.com/jlepore-wincapfinancial',
     email:'jlepore@wincapfinancial.com', phone:'617-858-8550', bio:[
      "Joe started his career over twenty years ago in the finance industry at Fidelity Investments. He has experience in the Mortgage and Real Estate industry where he spent 5 years working with individuals and families. Joe also spent 11 years in Public Education teaching Math in an urban district where he grew up. Joe came back to the wealth management industry and has been working with families and businesses since 2018. He is able to specialize in helping teachers prepare for retirement.",
      "Joe's experience in business, Finance and Teaching allowed him to be given an opportunity to teach as an Adjunct Professor at the Gerrish School of Business at Endicott College. Joe is active in the community of Peabody, MA where he lives with his Wife and three children. He is an active member of the business community and spent time on the Peabody Chamber of Commerce Board of Directors.",
      "Joe's main focus and passion is building long-lasting relationships and partnering with individuals and families to create comprehensive financial plans."
    ]},
    {name:'Joseph Duran', role:'Senior Wealth Manager', slug:'joseph-duran',
     linkedin:'https://www.linkedin.com/in/joseph-duran-69562839/', booking:'https://calendly.com/jduran-wincapfinancial',
     email:'jduran@wincapfinancial.com', phone:'970-447-4721', bio:[
      "Joseph Duran is a seasoned financial advisor at WinCap Financial, widely respected for his analytical insight and unwavering commitment to client-centered service. A Magna Cum Laude graduate in Business Administration with a concentration in Finance from Colorado State University, Joseph combines personalized strategy with innovative financial planning. His experience includes authoring complex financial plans, designing strategic life insurance solutions, and guiding clients through critical decisions in long-term care&mdash;empowering them to build lasting financial security.",
      "He began his career at UBS Financial Services, where he sharpened his expertise in investment research and portfolio construction. Today, at WinCap Financial, Joseph is passionate about crafting adaptable strategies tailored to each client's unique life path. He also advises businesses on cash management and helps clients navigate the complexities of establishing and managing qualified retirement plans.",
      "Joseph believes deeply in the importance of work-life balance and community involvement. He cherishes time with his wife, Carly, and their three children, and proudly serves on the board of Junior Achievement &ndash; Rocky Mountain, where he helps shape the next generation's financial literacy and leadership skills. This commitment to family and service guides the thoughtful, people-first approach he brings to every client relationship."
    ]},
    {name:'Frank Mahoney', role:'Chief of Staff', slug:'frank-mahoney',
     linkedin:'https://www.linkedin.com/in/frankmahoneywincap/', booking:'https://calendar.app.google/hCeWzPycRMiePcpGA',
     email:'fmahoney@wincapfinancial.com', phone:'617-683-1231', bio:[
      "Frank Mahoney is the current Chief of Staff at WinCap Financial and has been in the financial services industry for over 3 years. Frank began his relationship with WinCap Financial in November 2021, and worked closely with CEO &amp; Founder, Michael Collins, to build a wealth management firm from the ground up, leveraging a leading-edge technology stack.",
      "Frank currently monitors the firm's operations, from client experience to advisor reporting and efficiencies. Frank began his journey at WinCap as an intern, and later an analyst, before graduating Summa Cum Laude from Endicott College. Frank has also passed NASAA's Series 65 - Uniform Investment Adviser Law Exam, which allows one to provide financial advice &amp; manage client portfolios."
    ]},
    {name:'Drew Crowley', role:'Head of Artificial Intelligence', slug:'drew-crowley',
     linkedin:'https://www.linkedin.com/in/drew-crowley-415a18258', booking:'https://calendar.app.google/end6d1mTBfJnUuvP9',
     email:'dcrowley@wincapfinancial.com', phone:'617-675-5778', bio:[
      "Drew Crowley is currently Head of Artificial Intelligence at WinCap Financial and has been in the financial services industry for over 2 years. Drew began his relationship with WinCap Financial in January 2024, and has been working closely with CEO &amp; Founder, Michael Collins, to optimize the firm's equity and fixed income portfolios.",
      "Drew is currently responsible for research and analyzing market trends, implementation of artificial intelligence into firm operations, and supporting the firm's advisors and clients. Drew first started at WinCap as an intern and analyst before graduating Cum Laude from Providence College. He has also passed NASAA's Series 65 - Uniform Investment Adviser Law Exam, which allows one to provide financial advice &amp; manage client portfolios."
    ]}
  ];

  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid) {
    teamGrid.innerHTML = team.map((m, i) => `
      <button class="member reveal" type="button" data-bio="${i}" aria-haspopup="dialog">
        <img class="member-photo" src="team/${m.slug}.jpg" alt="${m.name}" width="720" height="720" loading="lazy">
        <span class="member-body">
          <span class="member-name">${m.name}${m.creds ? `<span class="member-creds">, ${m.creds}</span>` : ''}</span>
          <span class="role">${m.role}</span>
          <span class="prof">Read bio <span class="arrow">&rarr;</span></span>
        </span>
      </button>`).join('');

    const modal = document.createElement('div');
    modal.className = 'bio-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'bioName');
    modal.innerHTML = `
      <div class="bio-backdrop" data-close></div>
      <div class="bio-panel">
        <button class="bio-close" type="button" aria-label="Close biography" data-close>&times;</button>
        <div class="bio-head">
          <img class="bio-photo" id="bioPhoto" src="" alt="">
          <div>
            <h3 id="bioName"></h3>
            <div class="bio-role" id="bioRole"></div>
            <div class="bio-contact" id="bioContact" hidden></div>
            <div class="bio-actions" id="bioActions" hidden></div>
          </div>
        </div>
        <div class="bio-body" id="bioBody"></div>
      </div>`;
    document.body.appendChild(modal);

    const panel = modal.querySelector('.bio-panel');
    const bioPhoto = modal.querySelector('#bioPhoto');
    const bioName = modal.querySelector('#bioName');
    const bioRole = modal.querySelector('#bioRole');
    const bioBody = modal.querySelector('#bioBody');
    const bioContact = modal.querySelector('#bioContact');
    const bioActions = modal.querySelector('#bioActions');
    const bioClose = modal.querySelector('.bio-close');
    let lastFocus = null;
    // Inline icons for the bio action buttons.
    const ICON_LI = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>';
    const ICON_CAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';

    const openBio = (m, trigger) => {
      lastFocus = trigger;
      bioPhoto.src = 'team/' + m.slug + '.jpg';
      bioPhoto.alt = m.name;
      bioName.innerHTML = m.name + (m.creds ? '<span class="bio-creds">, ' + m.creds + '</span>' : '');
      bioRole.innerHTML = m.role;
      bioBody.innerHTML = m.bio.map(p => '<p>' + p + '</p>').join('');

      // Direct phone and email, shown as a plain line under the role. The tel:
      // href is built from the digits so the display format stays human.
      const contact = [];
      if (m.phone) {
        contact.push('<a href="tel:+1' + m.phone.replace(/\D/g, '') + '">' + m.phone + '</a>');
      }
      if (m.email) {
        contact.push('<a href="mailto:' + m.email + '">' + m.email + '</a>');
      }
      bioContact.innerHTML = contact.join('<span class="bio-sep">&middot;</span>');
      bioContact.hidden = contact.length === 0;

      const first = m.name.split(' ')[0];
      // Only render a button when we actually have a URL for it, so someone
      // without a booking link just gets LinkedIn and nobody gets a dead link.
      const acts = [];
      if (m.linkedin) {
        acts.push('<a class="bio-act" href="' + m.linkedin + '" target="_blank" rel="noopener">' +
          ICON_LI + 'Connect on LinkedIn</a>');
      }
      if (m.booking) {
        acts.push('<a class="bio-act bio-act-primary" href="' + m.booking + '" target="_blank" rel="noopener">' +
          ICON_CAL + 'Schedule with ' + first + '<span class="arrow">&rarr;</span></a>');
      }
      bioActions.innerHTML = acts.join('');
      bioActions.hidden = acts.length === 0;

      panel.scrollTop = 0;
      modal.classList.add('open');
      document.body.classList.add('modal-open');
      bioClose.focus();
    };

    const closeBio = () => {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
      if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    };

    teamGrid.querySelectorAll('.member').forEach(btn => {
      btn.addEventListener('click', () => openBio(team[Number(btn.dataset.bio)], btn));
    });
    modal.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close')) closeBio();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeBio();
    });
  }

  // Scheduling picker: one row per person who has a booking link, built from
  // the same team data above so there is no second list of URLs to keep in sync.
  const schedList = document.getElementById('schedList');
  if (schedList) {
    schedList.innerHTML = team.filter(m => m.booking).map(m => `
      <a class="sched-row reveal" href="${m.booking}" target="_blank" rel="noopener">
        <img class="sched-photo" src="team/${m.slug}.jpg" alt="" width="112" height="112" loading="lazy">
        <span class="sched-who">
          <span class="sched-name">${m.name}${m.creds ? `<span class="sched-creds">, ${m.creds}</span>` : ''}</span>
          <span class="sched-role">${m.role}</span>
        </span>
        <span class="sched-cta">Book a time <span class="arrow">&rarr;</span></span>
      </a>`).join('');
  }

  // Newsletter: the weekly Substack posts, read through /api/newsletter and
  // rendered here rather than sending people off to Substack.
  const postList = document.getElementById('postList');
  const postView = document.getElementById('postView');
  if (postList && postView) {
    const parser = new DOMParser();

    const fmtDate = (raw) => {
      const d = new Date(raw);
      return isNaN(d.getTime()) ? '' :
        d.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
    };

    // Pull a namespaced child (content:encoded, dc:creator) whichever way the
    // parser exposed it, then fall back to matching on local name.
    const field = (item, qualified) => {
      let el = item.getElementsByTagName(qualified)[0];
      if (!el && qualified.indexOf(':') > -1) {
        const local = qualified.split(':')[1];
        el = Array.prototype.find.call(item.children, c => c.localName === local);
      }
      return el ? (el.textContent || '') : '';
    };

    // It is our own writing, but it is still third-party HTML arriving at
    // runtime, so drop anything executable or interactive before it goes in.
    const sanitize = (html) => {
      const d = parser.parseFromString(html, 'text/html');
      d.querySelectorAll('script,style,form,button,input,textarea,select,iframe,object,embed,link,meta').forEach(n => n.remove());
      d.querySelectorAll('*').forEach(el => {
        Array.prototype.slice.call(el.attributes).forEach(attr => {
          const bad = /^on/i.test(attr.name) ||
            (/^(href|src|srcset)$/i.test(attr.name) && /^\s*javascript:/i.test(attr.value));
          if (bad) el.removeAttribute(attr.name);
        });
      });
      d.querySelectorAll('a[href]').forEach(a => { a.target = '_blank'; a.rel = 'noopener noreferrer'; });
      d.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; img.removeAttribute('height'); });
      return d.body.innerHTML;
    };

    const plain = (html) => {
      const d = parser.parseFromString(html, 'text/html');
      d.querySelectorAll('script,style,form,button').forEach(n => n.remove());
      return (d.body.textContent || '').replace(/\s+/g, ' ').trim();
    };

    const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

    let posts = [];

    const showList = () => {
      postView.hidden = true;
      postList.hidden = false;
      window.scrollTo({top:0, behavior:'smooth'});
    };

    const showPost = (i) => {
      const p = posts[i];
      if (!p) return;
      postView.innerHTML =
        '<button class="post-back" type="button">&larr; All posts</button>' +
        '<h2 class="post-title">' + esc(p.title) + '</h2>' +
        '<div class="post-meta">' + [p.author, p.date].filter(Boolean).map(esc).join(' &middot; ') + '</div>' +
        '<div class="post-content">' + p.content + '</div>' +
        '<a class="post-source" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">' +
        'Read this post on Substack <span class="arrow">&rarr;</span></a>';
      postView.querySelector('.post-back').addEventListener('click', showList);
      postList.hidden = true;
      postView.hidden = false;
      window.scrollTo({top:0, behavior:'smooth'});
    };

    const failed = () => {
      postList.innerHTML = '<p class="post-status">The latest posts could not be loaded just now. ' +
        'You can read them at <a href="https://wincap.substack.com" target="_blank" rel="noopener noreferrer">wincap.substack.com</a>.</p>';
    };

    fetch('/api/newsletter')
      .then(r => r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(xml => {
        const doc = parser.parseFromString(xml, 'application/xml');
        if (doc.getElementsByTagName('parsererror').length) throw new Error('unparseable feed');
        posts = Array.prototype.map.call(doc.getElementsByTagName('item'), item => {
          const body = field(item, 'content:encoded') || field(item, 'description');
          const enclosure = item.getElementsByTagName('enclosure')[0];
          const excerpt = plain(body);
          return {
            title: field(item, 'title'),
            link: field(item, 'link'),
            date: fmtDate(field(item, 'pubDate')),
            author: field(item, 'dc:creator'),
            image: enclosure ? (enclosure.getAttribute('url') || '') : '',
            excerpt: excerpt.length > 180 ? excerpt.slice(0, 180).replace(/\s+\S*$/, '') + '…' : excerpt,
            content: sanitize(body)
          };
        });
        if (!posts.length) throw new Error('no items');
        postList.innerHTML = posts.map((p, i) => `
          <button class="post-card" type="button" data-post="${i}">
            ${p.image ? `<img class="post-thumb" src="${esc(p.image)}" alt="" loading="lazy">` : '<span class="post-thumb post-thumb-empty"></span>'}
            <span class="post-body">
              ${p.date ? `<span class="post-date">${esc(p.date)}</span>` : ''}
              <span class="post-name">${esc(p.title)}</span>
              <span class="post-excerpt">${esc(p.excerpt)}</span>
              <span class="post-more">Read the story <span class="arrow">&rarr;</span></span>
            </span>
          </button>`).join('');
        postList.querySelectorAll('.post-card').forEach(btn => {
          btn.addEventListener('click', () => showPost(Number(btn.dataset.post)));
        });
      })
      .catch(failed);
  }

  // External links (Client Login, advisor profiles, socials) are plain
  // target="_blank" anchors in the markup — the browser opens them in a new
  // tab on its own. Do not intercept them here: window.open(url, '_blank',
  // 'noopener') always returns null by spec, so any "popup was blocked"
  // fallback fires on success too and navigates this tab away as well.

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
