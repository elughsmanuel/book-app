import Search from './models/Search';
import Book from './models/Book';
import New from './models/New';

import * as searchView from './views/searchView';
import * as bookView from './views/bookView';
import * as newView from './views/newView';
import { elements } from './views/base';

import { clearLoader, renderLoader } from './views/base';
import { clearLoader2, renderLoader2 } from './views/base';
import { clearLoader3, renderLoader3 } from './views/base';

////////////////////////////////////////
// Global state for all functions

const state = {};



////////////////////////////////////////////
// // SEARCH CONTROLLER

const controlSearch = async () => {
    // const query = 'javascript'; // testing
    const query = searchView.getInput();
    // console.log(query);

    if(query) {
        state.search = new Search(query);
        // searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            await state.search.getResults();
            clearLoader();
            searchView.renderResults(state.search.result);
        }
        catch(error) {
            console.log('Error: Search Error');
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
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/////////////////////////////////////////////



////////////////////////////////////////////
// // BOOK CONTROLLER

const controlBook = async () => {
    const id = window.location.hash.replace('#', '');
    // const id = 9781617294136;
    // console.log(id);

    if(id) {
        bookView.clearBook();
        renderLoader2(elements.book);
        // if(state.search)searchView.highlightSelected(id);
        state.book = new Book(id);
        
        try {
            await state.book.getBook();
            // console.log(state.book);
            clearLoader2();
            bookView.renderBook(
                state.book
            );
        }
        catch(error) {
            console.log('Error: Book Error');
            console.log(error);
        }
    }
};

window.addEventListener('hashchange', controlBook);
window.addEventListener('load', controlBook);

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlBook));

/////////////////////////////////////////////



////////////////////////////////////////////
// // NEW CONTROLLER

const controlNew = async () => {
    try {
        renderLoader3(elements.newResList);
        state.new = new New();
        await state.new.getResults();
        clearLoader3();
        newView.renderResults(state.new.result);
    }
    catch(error) {
        console.log('Error: New Book Error')
        console.log(error);
    }
}

controlNew();

// NEXT - PREVIOUS BUTTON CLICK CONTROL
elements.newResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-next-previous-monthly');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        newView.clearResults();
        newView.renderResults(state.new.result, goToPage);
    }
});

/////////////////////////////////////////////






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
