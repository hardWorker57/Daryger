//header style-change event

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver
(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav_scrolled");
            menuBtn.classList.add('scrolled_menu');
        } else {
            header.classList.remove("nav_scrolled");
            menuBtn.classList.remove('scrolled_menu');
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// accordion

const accordion = document.getElementsByClassName('contentBx');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
};

//animations

$(window).scroll(function () {
    $('.mov').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__bounceInLeft');
            $(this).removeClass('mov');
        }
    });
});
$(window).scroll(function () {
    $('.movL').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__bounceInRight');
            $(this).removeClass('movL');
        }
    });
});
$(window).scroll(function () {
    $('.mov_card').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__zoomIn');
            $(this).removeClass('mov_card');
        }
    });
});
$(window).scroll(function () {
    $('.mov_light').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass('animate__zoomInDown');
            $(this).removeClass('mov_light');
        }
    });
});

$(window).scroll(function () {
    $('.card_fade').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+800) {
            $(this).addClass('animate__fadeInUp');
        }
    });
});

//burger-menu

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.burger_menu')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.menu_list').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}