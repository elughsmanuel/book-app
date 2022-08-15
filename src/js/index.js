import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {}

const controlSearch = async () => {
    const query = 'python'; // testing
    // const query = searchView.getInput();
    
    console.log(query);


    if(query) {
        state.search = new Search(query);
        searchView.clearInput();
        searchView.clearResults();

        try {
            await state.search.getResults();
            searchView.renderResults(state.search.result);
        }
        catch(error) {
            console.log(error);
        }
    }
}

// SEARCH INPUT CLICK CONTROL
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

// testing
controlSearch();

// NEXT - PREVIOUS BUTTON CLICK CONTROL
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-next-previous');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 4)
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});






































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



// MOBILE NAVIGATION BAR

var homePage2 = document.querySelector('#home-page-2');
var aboutPage2 = document.querySelector('#about-page-2');
var bookmarkPage2 = document.querySelector('#bookmark-page-2');

var homeBox2 = document.querySelector('.home-box');
var aboutBox2 = document.querySelector('.about-box');
var bookmarkBox2 = document.querySelector('.bookmark-box');

homePage2.addEventListener('click', function() {
    homeBox2.classList.remove('home-box-display');
    aboutBox2.classList.add('about-box-display');
    bookmarkBox2.classList.add('bookmark-box-display');
});

aboutPage2.addEventListener('click', function() {
    homeBox2.classList.add('home-box-display');
    aboutBox2.classList.remove('about-box-display');
    bookmarkBox2.classList.add('bookmark-box-display');
});

bookmarkPage2.addEventListener('click', function() {
    homeBox2.classList.add('home-box-display');
    aboutBox2.classList.add('about-box-display');
    bookmarkBox2.classList.remove('bookmark-box-display');
});