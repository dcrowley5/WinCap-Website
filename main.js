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

  const team = [
    {name:'Michael Collins', role:'Founder & CEO', slug:'michael-collins'},
    {name:'Zach Ciampa', role:'Head of Financial Planning', slug:'zach-ciampa'},
    {name:'Luke Pavlatos', role:'Senior Wealth Manager', slug:'luke-pavlatos'},
    {name:'Joseph Lepore', role:'Senior Wealth Manager', slug:'joseph-lepore'},
    {name:'Joseph Duran', role:'Senior Wealth Manager', slug:'joseph-duran'},
    {name:'Frank Mahoney', role:'Chief of Staff', slug:'frank-mahoney'},
    {name:'Drew Crowley', role:'Head of Artificial Intelligence', slug:'drew-crowley'}
  ];
  const initials = n => n.split(' ').map(w=>w[0]).join('').slice(0,2);
  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid) teamGrid.innerHTML = team.map(m => `
    <a class="member reveal" href="https://wincapfinancial.com/${m.slug}" target="_blank" rel="noopener noreferrer">
      <div class="avatar">${initials(m.name)}</div>
      <h4>${m.name}</h4>
      <div class="role">${m.role}</div>
      <span class="prof">View profile →</span>
    </a>`).join('');

  // External links (advisor profiles, client tools, socials) can be blocked
  // by the preview sandbox — open them explicitly, with a fallback.
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const url = a.getAttribute('href');
      const win = window.open(url, '_blank', 'noopener');
      if (!win) { try { window.top.location.href = url; } catch (_) { window.location.href = url; } }
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
