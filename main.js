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

const tabsbtn = document.querySelectorAll(".tab_btn");
const tabsItems = document.querySelectorAll(".tabs_item");

tabsbtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsbtn.forEach(function (item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});
function offTab() {
    tabsbtn.forEach(function (item) {
        item.classList.remove('active');
    });

    tabsItems.forEach(function (item) {
        item.classList.remove('active');
    });
}
// FAQ remove empty place on tab
// function clearEmptyTab() {

// }


        // if (currentBtn.classList.contains('active') & offTab(2)) {
        //     tabsbtn.forEach(function (item) {
        //         item.classList.remove('active');
        //     });
        
        //     tabsItems.forEach(function (item) {
        //         item.classList.remove('active');
        //     });
        // }