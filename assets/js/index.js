window.addEventListener('load', () => {

    // ? Animacion Navbar Desplazar
    const listItem = document.querySelectorAll('.navbar-list-listItem');

    listItem.forEach((item) => {
        setTimeout(() => {
            item.classList.add('animationMove')
        }, 300);
    })

    // ? Galeria Con Libreria Glider JS

    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });

    // ? Scroll Reveal
    ScrollReveal({reset: true})
    ScrollReveal().reveal('.title-trabajos', {delay: 200});
    ScrollReveal().reveal('.card', {delay: 300});
    ScrollReveal().reveal('.title-main-galery', {delay: 200});
    ScrollReveal().reveal('.carousel__contenedor', {delay: 200});
    ScrollReveal().reveal('.title-text-header', {delay: 200});
    ScrollReveal().reveal('.span-text-header', {delay: 400});


})
