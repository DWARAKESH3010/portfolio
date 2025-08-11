/*======================= toggle icon navbar ==========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

/*======================= scroll section active link ==========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /*======================= sticky navbar ==========================*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*======================= remove toggle icon and navbar ==========================*/
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/*======================= scroll reveal ==========================*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*======================= Typed JS ==========================*/
const typed = new Typed('.multiple-text', {
  strings: ['AI / ML Engineer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*======================= Toggle Button (Services Read More) ==========================*/
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.services-box');
    const fullText = box.querySelector('.full-text');
    const isVisible = fullText.style.display === 'block';

    fullText.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read more' : 'Read less';
  });
});
/*======================= Toggle Button (Achievements Read More) ==========================*/
document.querySelectorAll('.read-more-text').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.achievement-box');
    const fullText = box.querySelector('.full-text');
    const isVisible = fullText.style.display === 'block';

    fullText.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Read more' : 'Read less';
  });
});


/*======================= Theme Toggle ==========================*/
const toggleCheckbox = document.getElementById("toggle-theme");
const root = document.documentElement;

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    root.classList.add("light-mode");
    toggleCheckbox.checked = true;
  }
});

toggleCheckbox.addEventListener("change", () => {
  const isLight = toggleCheckbox.checked;
  root.classList.toggle("light-mode", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/*======================= Toggle About Section ==========================*/
document.querySelector('.toggle-about').addEventListener('click', function () {
  const moreAbout = document.querySelector('.more-about');
  const education = document.querySelector('.education-details');

  const isVisible = moreAbout.style.display === 'block';

  if (!isVisible) {
    moreAbout.style.display = 'block';
    education.style.display = 'block';
    this.textContent = 'Read less';
  } else {
    moreAbout.style.display = 'none';
    education.style.display = 'none';
    this.textContent = 'Read more';
  }
});


  function scrollPortfolio(direction) {
    const container = document.getElementById("scrollContainer");
    const boxWidth = container.querySelector(".portfolio-box").offsetWidth + 32; // add gap
    container.scrollBy({
      left: direction * boxWidth,
      behavior: "smooth"
    });
  }