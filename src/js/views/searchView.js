import { elements } from "./base"; 

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = "";
};

export const clearResults = () => {
    elements.searchResList.innerHTML = "";
    elements.searchResPages.innerHTML = "";
};

export const limitBookTitle = (title, limit = 25) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(" ").reduce((acc, cur) => {
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(" ")} ...`;
    }
    return title;
};

////////////////////////////////////////
// highlight selected function 

// export const highlightSelected = id => {
//     const resultsArr = Array.from(document.querySelectorAll('.search-link'));
//     resultsArr.forEach(el => {
//         el.classList.remove('search-link-active');
//     })
//     document.querySelector(`.search-link[href="#${id}"]`).classList.add('search-link-active');
// };

const renderBook = (book) => {
    const markup = `
    <div class="box-1-of-2-s">
        <a href="#${book.isbn13}" class="search-link">
        <div class="search-pic-preview">
            <img
            src="${book.image}"
            alt="${book.title}"
            />
            <div class="search-pic-gradient"></div>
        </div>
        <div class="search-content">
            <h2>${limitBookTitle(book.title)}</h2>
            <h3><i class="fa-solid fa-user"></i>Author's name</h3>
            <div class="search-sub-content">
            <h1>0</h1>
            <h3>
                <i class="fa-solid fa-chart-line"></i>Rating
            </h3>
            </div>
        </div>
        </a>
    </div>
    `;
    elements.searchResList.insertAdjacentHTML("beforeend", markup);
};


const createButton = (page, type) => `
    <button class="btn-next-previous" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <i class="fa-solid fa-angles-${type === 'prev' ? 'left' : 'right'}"></i>
    </button>
`;

const renderButton = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if(page === 1 && pages > 1) {
        button = createButton(page, 'next');
    }
    else if(page < pages) {
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    }
    else if(page === pages && pages > 1) {
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (books, page = 1, resPerPage = 4) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    books.slice(start, end).forEach(renderBook);

    renderButton(page, books.length, resPerPage);
}