import { elements } from "./base";


////////////////////////////////////////
// Clear search input and search results

export const clearResults = () => {
    elements.newResList.innerHTML = "";
    elements.newResPages.innerHTML = "";
};


////////////////////////////////////////
// Limit searched books title  

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
// Display searched books 

const renderBook = (book) => {
    const markup = `
    <div class="box-monthly-con">
    
    <div class="box-1-of-2">
            <div class="monthly-pic-preview">
            <img
                src="${book.image}"
                alt="${book.title}"
            />
            <div class="monthly-pic-gradient"></div>
            </div>
            <div class="monthly-content">
            <h2>${limitBookTitle(book.title)}</h2>
            <div class="monthly-sub-content">
                <!-- <div class="box-1-of-2-sc">
                <h1>1</h1>
                <h3>Position</h3>
                <i class="fa-solid fa-ranking-star"></i>
                </div> -->
                <div class="box-1-of-2-sc">
                <h1>${book.price}</h1>
                <h3>Price</h3>
                <i class="fa-solid fa-chart-line"></i>
                </div>
            </div>
            <div class="btn-con">
                <a href="#${book.isbn13}">
                <button>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                </a>
            </div>
            </div>
    
    
    </div>
        
        </div>
    `;
    elements.newResList.insertAdjacentHTML("beforeend", markup);
};


////////////////////////////////////////
// New books next/prev page button

const createButton = (page, type) => `
    <button class="btn-next-previous-monthly" data-goto=${type === 'prev' ? page - 1 : page + 1}>
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

    elements.newResPages.insertAdjacentHTML('afterbegin', button);
};



////////////////////////////////////////
// Display new books and other pages

export const renderResults = (books, page = 1, resPerPage = 2) => {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    books.slice(start, end).forEach(renderBook);

    renderButton(page, books.length, resPerPage);
};
