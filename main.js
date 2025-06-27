/*=======================toggle icon navbar ==========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=======================scroll section active link ==========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*' + id + ']').classList.add('active');
            });
        };
        
    });
    /*=======================sticky navbar==========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*======================= remove toggle icon and navbar==========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
    /*======================= scroll reveal ==========================*/
    ScrollReveal({
        distance:'80px',
        duration:2000,
        delay:200,
    });

    ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
    ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});

       /*======================= TYPED JS ==========================*/

       const typed = new Typed('.multiple-text',{
        strings:['Frontend Developer','UI & UX Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
       })


  const modal = document.getElementById("portfolioModal");
  const modalImage = modal.querySelector(".scrollable-image");
  const modalDescription = modal.querySelector(".modal-description");
  const figmaIframe = modal.querySelector(".figma-prototype iframe");
  const closeBtn = modal.querySelector(".close-btn");

  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const image = this.getAttribute("data-image");
      const description = this.getAttribute("data-description");
      const figmaLink = this.getAttribute("data-figma");

      modalImage.src = image;
      modalDescription.textContent = description;

      // Set the iframe src dynamically
      if (figmaLink) {
        figmaIframe.src = figmaLink;
        figmaIframe.style.display = "flex";
      } else {
        figmaIframe.style.display = "none";
      }

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    figmaIframe.src = ""; // Clear iframe src to stop loading
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      figmaIframe.src = "";
    }
  });

    // JavaScript for toggle functionality
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const box = button.closest('.services-box');
      const fullText = box.querySelector('.full-text');
      const isVisible = fullText.style.display === 'block';

      fullText.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'Read more' : 'Read less';
    });
  });

    // Read more/less toggle for About section
  document.querySelector('.toggle-about').addEventListener('click', function () {
    const moreText = document.querySelector('.more-about');
    const isVisible = moreText.style.display === 'block';
    moreText.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? 'Read more' : 'Read less';
  });

  

