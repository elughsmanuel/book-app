import { elements } from "./base";


////////////////////////////////////////
// Clear selected book details

export const clearBook = () => {
    elements.book.innerHTML = '';
}


////////////////////////////////////////
// Display selected book details

export const renderBook = (book, isBookmarked) => {
    const markup = `
        <div class="result-box">
            <h2>About the book</h2>
            <button class="result-bookmark">
                <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
            </button>
            <div class="result-box-preview">
                <img
                src="${book.image}"
                alt="${book.title}"
                />
            </div>
            <h1>${book.title}</h1>
            <h3><i class="fa-solid fa-user"></i>${book.authors}</h3>
            <h5>${book.subtitle}</h5>
            <div class="result-stats">
                <div class="box-1-of-2-rs">
                <h4>${book.year}</h4>
                <h5>Year</h5>
                <i class="fa-solid fa-calendar"></i>
                </div>
                <div class="box-1-of-2-rs rs-last-child">
                <h4>${book.pages}</h4>
                <h5>Pages</h5>
                <i class="fa-solid fa-book"></i>
                </div>
                <div class="box-1-of-2-rs rs-last-child">
                <h4>${book.rating}</h4>
                <h5>Rating</h5>
                <i class="fa-solid fa-chart-line"></i>
                </div>
            </div>
            <div class="synopsis-box">
                <h4>Synopsis</h4>
                <p>
                ${book.desc}
                </p>
            </div>
            <div class="read-btn-con">
                <a
                target="_blank"
                href="${book.url}"
                >Read</a
                >
            </div>
            <div class="close-btn-con">
                <a href="">
                <i class="fa-solid fa-xmark"></i>
                </a>
            </div>
        </div>
    `;
    elements.book.insertAdjacentHTML('beforeend', markup);
};