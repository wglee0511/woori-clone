import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
      
        const swiper2 = new Swiper('.slide2', {
         slidesPerView: 1,
         loop: true,
         navigation: {
            nextEl: '.slide2 .slide-button-next',
            prevEl: '.slide2 .slide-button-prev',
           },
     });