//////////////////////////////////////
// TEMPORARY

var homePage = document.querySelector('#home-page');
var aboutPage = document.querySelector('#about-page');
var bookmarkPage = document.querySelector('#bookmark-page');

var homeBox = document.querySelector('.home-box');
var aboutBox = document.querySelector('.about-box');
var bookmarkBox = document.querySelector('.bookmark-box');

homePage.addEventListener('click', function() {
    homeBox.classList.remove('home-box-display');
    aboutBox.classList.add('about-box-display');
    bookmarkBox.classList.add('bookmark-box-display');

    homePage.classList.add('active');
    aboutPage.classList.remove('active');
    bookmarkPage.classList.remove('active');
});

aboutPage.addEventListener('click', function() {
    homeBox.classList.add('home-box-display');
    aboutBox.classList.remove('about-box-display');
    bookmarkBox.classList.add('bookmark-box-display');

    homePage.classList.remove('active');
    aboutPage.classList.add('active');
    bookmarkPage.classList.remove('active');
});

bookmarkPage.addEventListener('click', function() {
    homeBox.classList.add('home-box-display');
    aboutBox.classList.add('about-box-display');
    bookmarkBox.classList.remove('bookmark-box-display');

    homePage.classList.remove('active');
    aboutPage.classList.remove('active');
    bookmarkPage.classList.add('active');
});
