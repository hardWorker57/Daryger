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
        } else {
            header.classList.remove("nav_scrolled");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// tabs

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
        if (imagePos < topOfWindow+250) {
            $(this).addClass('animate__bounceInLeft');
            $(this).removeClass('mov');
        }
    });
});
$(window).scroll(function () {
    $('.movL').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+250) {
            $(this).addClass('animate__bounceInRight');
            $(this).removeClass('movL');
        }
    });
});
$(window).scroll(function () {
    $('.mov_card').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+250) {
            $(this).addClass('animate__zoomIn');
            $(this).removeClass('mov_card');
        }
    });
});
$(window).scroll(function () {
    $('.mov_light').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+250) {
            $(this).addClass('animate__zoomInDown');
            $(this).removeClass('mov_light');
        }
    });
});

