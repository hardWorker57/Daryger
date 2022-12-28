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
        }
    });
});
$(window).scroll(function () {
    $('.movL').each(function () {
        let imagePos = $(this).offset().top;
        let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+250) {
            $(this).addClass('animate__bounceInRight');
        }
    });
});
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//         else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));




// const tabsbtn = document.querySelectorAll(".tab_btn");
// const tabsItems = document.querySelectorAll(".tabs_item");

// tabsbtn.forEach(function (item) {
//     item.addEventListener("click", function () {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);

//         tabsbtn.forEach(function (item) {
//             item.classList.remove('active');
//         });

//         tabsItems.forEach(function (item) {
//             item.classList.remove('active');
//         });

//         currentBtn.classList.add('active');
//         currentTab.classList.add('active');
//     });
// });
// function offTab() {
//     tabsbtn.forEach(function (item) {
//         item.classList.remove('active');
//     });

//     tabsItems.forEach(function (item) {
//         item.classList.remove('active');
//     });
// }