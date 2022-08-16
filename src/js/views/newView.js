import { elements } from "./base";

export const renderBook = (book) => {
    const markup = `
    <div class="box-monthly-con">
    
    <div class="box-1-of-2">
            <div class="monthly-pic-preview">
            <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657897729i/59571699.jpg"
                alt="Love on the Brain"
            />
            <div class="monthly-pic-gradient"></div>
            </div>
            <div class="monthly-content">
            <h2>${book.title}</h2>
            <div class="monthly-sub-content">
                <div class="box-1-of-2-sc">
                <h1>1</h1>
                <h3>Position</h3>
                <i class="fa-solid fa-ranking-star"></i>
                </div>
                <div class="box-1-of-2-sc">
                <h1>4.3</h1>
                <h3>Rating</h3>
                <i class="fa-solid fa-chart-line"></i>
                </div>
            </div>
            <div class="btn-con">
                <a href="#popup">
                <button>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                </a>
            </div>
            </div>
    
    
    </div>
        
        </div>
    `;
    elements.newBookList.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = (books) => {
    books.forEach(renderBook);
}