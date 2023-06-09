const blockLogos = document.querySelector('.block-logos');
if(blockLogos) {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
    const marqueeContent = document.querySelector('.logos-inner');

    root.style.setProperty('--marquee-elements', marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
}

const blockAdvantages = document.querySelector('.block-advantages');
if (blockAdvantages) {

    const swiper = blockAdvantages.querySelector('.swiper-container');
    const swiperBtnPrev = blockAdvantages.querySelector('.swiper-button-prev');
    const swiperBtnNext = blockAdvantages.querySelector('.swiper-button-next');

    new Swiper(swiper, {
        slidesPerView: 3,
        loop: true,
        draggable: true,
        spaceBetween: 36,
        centeredSlides: true,
        // noSwiping: true,
        // autoplay: {
        //     disableOnInteraction: true,
        //     pauseOnMouseEnter: true,
        // },
        mousewheel: {
            forceToAxis: true,
        },
        slideToClickedSlide: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        navigation: {
            prevEl: swiperBtnPrev,
            nextEl: swiperBtnNext,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
}

const blockCategoriesSlides = document.querySelector('.block-categories-slides');
if (blockCategoriesSlides) {
    const sliders = blockCategoriesSlides.querySelectorAll('.slider');

    sliders.forEach( slider => {
        const swiper = slider.querySelector('.swiper-container');
        const swiperBtnPrev = slider.querySelector('.swiper-button-prev');
        const swiperBtnNext = slider.querySelector('.swiper-button-next');

        new Swiper(swiper, {
            slidesPerView: 3,
            loop: true,
            draggable: true,
            spaceBetween: 36,
            // noSwiping: true,
            // autoplay: {
            //     disableOnInteraction: true,
            //     pauseOnMouseEnter: true,
            // },
            mousewheel: {
                forceToAxis: true,
            },
            slideToClickedSlide: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            navigation: {
                prevEl: swiperBtnPrev,
                nextEl: swiperBtnNext,
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }
        });
    });
}
