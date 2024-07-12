let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

document.querySelector('#grade1').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1oV03U-y-v-bRlGoYBgzdh1_TgxnMsUoW/view?usp=sharing', '_blank'); // substitua o URL pelo que você deseja abrir
  });
   

document.querySelector('#grade2').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1WqM-qR9J1uVV7r-B-8BDYBTE-cLIuwWC/view?usp=sharing', '_blank'); // substitua o URL pelo que você deseja abrir
  });
document.querySelector('#grade3').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1HYnQ-xN_xastggMLbpjgWY2zCJ9Jvdtr/view?usp=sharing', '_blank'); // substitua o URL pelo que você deseja abrir
  });
document.querySelector('#grade4').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1TddPducM96iTt_TLdmZTvFWUfeeKp3ec/view?usp=sharing', '_blank'); // substitua o URL pelo que você deseja abrir
  });
document.querySelector('#grade5').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1knDaXbvi_xwawApLhpvw7xFUmc0C3mKk/view?usp=sharingg', '_blank'); // substitua o URL pelo que você deseja abrir
  });
document.querySelector('#grade6').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1nNJNYR5L7BcE8Ewz-f2sBdSaEAPfHyLU/view?usp=sharing', '_blank'); // substitua o URL pelo que você deseja abrir
  });
   
  document.querySelector('#grade7').addEventListener('click', function() {
    window.open('https://github.com/andrefqms/euro2024', '_blank'); // substitua o URL pelo que você deseja abrir
  });
  document.querySelector('#grade8').addEventListener('click', function() {
    window.open('https://github.com/andrefqms/Amazon-Delivery-Dataset', '_blank'); // substitua o URL pelo que você deseja abrir
  });
  document.querySelector('#grade9').addEventListener('click', function() {
    window.open('https://andrefqms.github.io/Movies-App/', '_blank'); // substitua o URL pelo que você deseja abrir
  });
  document.querySelector('#grade10').addEventListener('click', function() {
    window.open('https://andrefqms.github.io/Weather-app/', '_blank'); // substitua o URL pelo que você deseja abrir
  });
  document.querySelector('#grade11').addEventListener('click', function() {
    window.open('https://github.com/andrefqms/news-app', '_blank'); // substitua o URL pelo que você deseja abrir
  });


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
      })
    }

  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

