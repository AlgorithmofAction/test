const swiper = new Swiper('.swiper', {
    slidesPerView: 4, 
    spaceBetween: 20, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4, 
        },
        992: {
            slidesPerView: 3, 
        },
        768: {
            slidesPerView: 2.5, 
        },
        460: {
            slidesPerView: 2, 
            allowTouchMove: true, 
           
        },
        0: {
            slidesPerView: 1.2, 
            allowTouchMove: true, 
            spaceBetween: 15, 
        }
    }
});

// Табы
const tabTitle = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabTitle.forEach(function (item) {
    item.addEventListener('click', function () {
    
        
        contentBoxes.forEach(function (item) {
            item.classList.add('content__hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('content__hidden');
    })
});


// active
const activeTab = document.querySelectorAll('.menu__item');

activeTab.forEach(item => {
    item.addEventListener('click', () => {
        activeTab.forEach(t => t.classList.remove('menu__item-active'));
        item.classList.add('menu__item-active');
    })
})