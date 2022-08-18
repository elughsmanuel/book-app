////////////////////////////////////////
// Bookmark Book Model

export default class Bookmarks {
    constructor() {
        this.bookmarks = [];
    }

    addBookmark(id, title, authors, subtitle, year, pages, rating, image) {
        const bookmark = {
            id,
            title,
            authors,
            subtitle,
            year,
            pages,
            rating,
            image
        }
        this.bookmarks.push(bookmark);
        this.persistData();
        return bookmark;
    }

    deleteBookmark(id) {
        const index = this.bookmarks.findIndex(el => el.id === id);
        this.bookmarks.splice(index, 1);
        this.persistData();
    }

    isBookmarked(id) {
        return this.bookmarks.findIndex(el => el.id === id) !== -1;
    }

    getNumBookmarks() {
        return this.bookmarks.length;
    }

    persistData() {
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('bookmarks'));

        if(storage) this.bookmarks = storage;
    }
};