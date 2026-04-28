

// ── MENU TOGGLE ──────────────────────────────────────
const menuIcon = document.getElementById('menu-icon');
const navbar   = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navbar.classList.toggle('active');
  });
}

// Close navbar on link click (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon && menuIcon.classList.remove('open');
    navbar.classList.remove('active');
  });
});

// ── ACTIVE NAV ON SCROLL ─────────────────────────────
const sections  = document.querySelectorAll('section');
const navLinks  = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 200;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // ── PARALLAX — EDUCATION ──────────────────────────
  parallaxEducation();
});

// ── PARALLAX EDUCATION ───────────────────────────────
function parallaxEducation() {
  const section = document.getElementById('education');
  const bg      = document.getElementById('eduParallaxBg');
  if (!section || !bg) return;

  const rect     = section.getBoundingClientRect();
  const inView   = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;

  // How far through the section we've scrolled (-1 to 1)
  const progress = -rect.top / (window.innerHeight + rect.height);
  const offset   = progress * 120; // px shift

  bg.style.transform = `translateY(${offset}px)`;
}

// Run once on load
parallaxEducation();

// ── CERTIFICATE LINKS ────────────────────────────────
const gradeLinks = {
  grade1:  'https://drive.google.com/file/d/1oV03U-y-v-bRlGoYBgzdh1_TgxnMsUoW/view?usp=sharing',
  grade2:  'https://drive.google.com/file/d/1WqM-qR9J1uVV7r-B-8BDYBTE-cLIuwWC/view?usp=sharing',
  grade3:  'https://drive.google.com/file/d/1HYnQ-xN_xastggMLbpjgWY2zCJ9Jvdtr/view?usp=sharing',
  grade4:  'https://drive.google.com/file/d/1TddPducM96iTt_TLdmZTvFWUfeeKp3ec/view?usp=sharing',
  grade5:  'https://drive.google.com/file/d/1knDaXbvi_xwawApLhpvw7xFUmc0C3mKk/view?usp=sharingg',
  grade6:  'https://drive.google.com/file/d/1nNJNYR5L7BcE8Ewz-f2sBdSaEAPfHyLU/view?usp=sharing',
  grade7:  'https://github.com/andrefqms/euro2024',
  grade8:  'https://medium.com/@andre.soares_79642/otimiza%C3%A7%C3%A3o-da-efici%C3%AAncia-log%C3%ADstica-um-estudo-de-caso-dos-dados-de-entrega-da-amazon-4beadd22f71a',
  grade9:  'https://andrefqms.github.io/Movies-App/',
  grade10: 'https://andrefqms.github.io/Weather-app/',
  grade11: 'https://lookerstudio.google.com/u/0/reporting/b8a00a46-3b82-4845-97cc-a49a39760ce8/page/jxHAE'
};

Object.entries(gradeLinks).forEach(([id, url]) => {
  const el = document.getElementById(id);
  if (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => window.open(url, '_blank'));
  }
});
