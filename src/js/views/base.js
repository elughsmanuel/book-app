////////////////////////////////////////
// DOM parsing for all elements

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search-field'),
    searchRes: document.querySelector('.search-box'),
    searchResList: document.querySelector('.search-list'),
    searchResPages: document.querySelector('.next-previous-step'),
    book: document.querySelector('.result-box-con'),
    newResList: document.querySelector('.box-monthly'),
    newResPages: document.querySelector('.next-previous-step-monthly'),
    bookmarksMenu: document.querySelector('.fa-bookmark'),
    bookmarksList: document.querySelector('.bookmark-list')
};


////////////////////////////////////////
// Loader DOM and Functionality

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="spinner loader">
            <div class="ball"></div>
            <p>LOADING...</p>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
}




////////////////////////////////////////
// Loader II DOM and Functionality

export const elementStrings2 = {
    loader2: 'loader2'
};

export const renderLoader2 = parent => {
    const loader2 = `
        <div class="spinner2 loader2">
            <div class="ball2"></div>
            <p>LOADING...</p>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader2);
};

export const clearLoader2 = () => {
    const loader2 = document.querySelector(`.${elementStrings2.loader2}`);
    if(loader2) loader2.parentElement.removeChild(loader2);
}




////////////////////////////////////////
// Loader III DOM and Functionality

export const elementStrings3 = {
    loader3: 'loader3'
};

export const renderLoader3 = parent => {
    const loader3 = `
        <div class="spinner3 loader3">
            <div class="ball3"></div>
            <p>LOADING...</p>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader3);
};

export const clearLoader3 = () => {
    const loader3 = document.querySelector(`.${elementStrings3.loader3}`);
    if(loader3) loader3.parentElement.removeChild(loader3);
}