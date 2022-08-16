import axios from "axios";


////////////////////////////////////////
// Display Book Model

export default class Book {
    constructor(id) {
        this.id = id;
    }

    async getBook() {
        try {
            const options = {
                method: 'GET',
                url: `https://api.itbook.store/1.0/books/${this.id}`
            };

            const response = axios.request(options);
            this.title = (await response).data.title;
            this.authors = (await response).data.authors;
            this.pages = (await response).data.pages;
            this.rating = (await response).data.rating;
            this.desc = (await response).data.desc;
            this.image = (await response).data.image;
            this.url = (await response).data.url;
        }
        catch(error) {
            console.log('Error: Book API Error');
            console.log(error);
        }
    }
}