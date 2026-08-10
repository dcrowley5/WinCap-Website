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
  const team = [
    {name:'Michael Collins', role:'Founder &amp; CEO', slug:'michael-collins', bio:[
      "Michael Collins, CFA has worked in Wealth Management since 2012 with roles at Northern Trust and CAPTRUST. Prior to that Michael worked in various roles in Institutional Investment Management since starting his career at State Street in 2005. He has a depth of expertise in financial planning and investment management which he leverages to enhance client outcomes.",
      "Michael is a Chartered Financial Analyst (CFA) and a Fiduciary, which requires him to always act in the best interest of his clients. Michael also has his Masters Degree in Finance from Suffolk University",
      "Michael currently teaches at Endicott College and Bunker Hill Community College where he educates students about the intricacies of the market and the basic fundamentals used by professionals to evaluate the economy. Additionally, Michael has joined the CFA Board's Program Education &amp; Advisory Council as of 2025. Here, Michael looks to give back to the organization that has helped shape his professional career."
    ]},
    {name:'Zach Ciampa', role:'Head of Financial Planning', slug:'zach-ciampa', bio:[
      "Zach Ciampa brings 10 years of comprehensive experience in the financial services industry. His journey started at Fidelity Investments, where his focus was on investment planning. Subsequently, he enriched his skills during his time at Charles Schwab before contributing his insights as a financial planner at John Hancock. Through these experiences, Zach has honed his expertise to guide clients toward their financial goals.",
      "Zach is a CERTIFIED FINANCIAL PLANNER&trade; professional, Retirement Income Certified Professional&reg;, Chartered Financial Consultant&reg;, and Behavioral Finance Advisor&trade;. These certifications underscore his commitment to upholding the highest standards of professionalism and ethics. As a fiduciary, he ensures that clients receive advice which aligns with their best interests. Zach also earned his Bachelor's degree in Communications, with a minor in business, from Arizona State University."
    ]},
    {name:'Luke Pavlatos', role:'Senior Wealth Manager', slug:'luke-pavlatos', bio:[
      "Luke Pavlatos is a CERTIFIED FINANCIAL PLANNER&trade; practitioner and has been in the financial services industry since 2016. Prior to bringing his services to WinCap Financial, Luke worked for John Hancock, where he wore a couple different hats. In his first stint with John Hancock, he specialized in employer qualified plans and tax-advantaged accounts. He later took on a more comprehensive position as a Senior Financial Consultant. It was in this role that Luke and Zach first teamed up to help clients meet their goals. Luke focused on the investment planning, executed transactions, and managed the relationship with clients, while Zach performed the financial planning and retirement projections.",
      "As a CFP&reg;, Luke is also bound by his fiduciary duty to put the clients' interests above all else. In addition, as someone who is originally from a small town in the Midwest, Luke learned at a young age that trust and relationships are of utmost importance, and carries this with him into the business world. Luke has a Bachelor's degree in Economics from Denison University."
    ]},
    {name:'Joseph Lepore', role:'Senior Wealth Manager', slug:'joseph-lepore', bio:[
      "Joe started his career over twenty years ago in the finance industry at Fidelity Investments. He has experience in the Mortgage and Real Estate industry where he spent 5 years working with individuals and families. Joe also spent 11 years in Public Education teaching Math in an urban district where he grew up. Joe came back to the wealth management industry and has been working with families and businesses since 2018. He is able to specialize in helping teachers prepare for retirement.",
      "Joe's experience in business, Finance and Teaching allowed him to be given an opportunity to teach as an Adjunct Professor at the Gerrish School of Business at Endicott College. Joe is active in the community of Peabody, MA where he lives with his Wife and three children. He is an active member of the business community and spent time on the Peabody Chamber of Commerce Board of Directors.",
      "Joe's main focus and passion is building long-lasting relationships and partnering with individuals and families to create comprehensive financial plans."
    ]},
    {name:'Joseph Duran', role:'Senior Wealth Manager', slug:'joseph-duran', bio:[
      "Joseph Duran is a seasoned financial advisor at WinCap Financial, widely respected for his analytical insight and unwavering commitment to client-centered service. A Magna Cum Laude graduate in Business Administration with a concentration in Finance from Colorado State University, Joseph combines personalized strategy with innovative financial planning. His experience includes authoring complex financial plans, designing strategic life insurance solutions, and guiding clients through critical decisions in long-term care&mdash;empowering them to build lasting financial security.",
      "He began his career at UBS Financial Services, where he sharpened his expertise in investment research and portfolio construction. Today, at WinCap Financial, Joseph is passionate about crafting adaptable strategies tailored to each client's unique life path. He also advises businesses on cash management and helps clients navigate the complexities of establishing and managing qualified retirement plans.",
      "Joseph believes deeply in the importance of work-life balance and community involvement. He cherishes time with his wife, Carly, and their three children, and proudly serves on the board of Junior Achievement &ndash; Rocky Mountain, where he helps shape the next generation's financial literacy and leadership skills. This commitment to family and service guides the thoughtful, people-first approach he brings to every client relationship."
    ]},
    {name:'Frank Mahoney', role:'Chief of Staff', slug:'frank-mahoney', bio:[
      "Frank Mahoney is the current Chief of Staff at WinCap Financial and has been in the financial services industry for over 3 years. Frank began his relationship with WinCap Financial in November 2021, and worked closely with CEO &amp; Founder, Michael Collins, to build a wealth management firm from the ground up, leveraging a leading-edge technology stack.",
      "Frank currently monitors the firm's operations, from client experience to advisor reporting and efficiencies. Frank began his journey at WinCap as an intern, and later an analyst, before graduating Summa Cum Laude from Endicott College. Frank has also passed NASAA's Series 65 - Uniform Investment Adviser Law Exam, which allows one to provide financial advice &amp; manage client portfolios."
    ]},
    {name:'Drew Crowley', role:'Head of Artificial Intelligence', slug:'drew-crowley', bio:[
      "Drew Crowley is currently Head of Artificial Intelligence at WinCap Financial and has been in the financial services industry for over 2 years. Drew began his relationship with WinCap Financial in January 2024, and has been working closely with CEO &amp; Founder, Michael Collins, to optimize the firm's equity and fixed income portfolios.",
      "Drew is currently responsible for research and analyzing market trends, implementation of artificial intelligence into firm operations, and supporting the firm's advisors and clients. Drew first started at WinCap as an intern and analyst before graduating Cum Laude from Providence College. He has also passed NASAA's Series 65 - Uniform Investment Adviser Law Exam, which allows one to provide financial advice &amp; manage client portfolios."
    ]}
  ];

  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid) {
    teamGrid.innerHTML = team.map((m, i) => `
      <button class="member reveal" type="button" data-bio="${i}" aria-haspopup="dialog">
        <img class="member-photo" src="team/${m.slug}.jpg" alt="${m.name}" width="560" height="560" loading="lazy">
        <span class="member-body">
          <span class="member-name">${m.name}</span>
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
    const bioClose = modal.querySelector('.bio-close');
    let lastFocus = null;

    const openBio = (m, trigger) => {
      lastFocus = trigger;
      bioPhoto.src = 'team/' + m.slug + '.jpg';
      bioPhoto.alt = m.name;
      bioName.textContent = m.name;
      bioRole.innerHTML = m.role;
      bioBody.innerHTML = m.bio.map(p => '<p>' + p + '</p>').join('') +
        '<a class="bio-link" href="https://wincapfinancial.com/' + m.slug + '"' +
        ' target="_blank" rel="noopener noreferrer">Full profile <span class="arrow">&rarr;</span></a>';
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
