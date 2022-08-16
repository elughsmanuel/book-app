////////////////////////////////////////
// DOM parsing for all elements

export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search-field'),
    searchRes: document.querySelector('.search-box'),
    searchResList: document.querySelector('.search-list'),
    searchResPages: document.querySelector('.next-previous-step'),
    book: document.querySelector('.result-box-con')
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
