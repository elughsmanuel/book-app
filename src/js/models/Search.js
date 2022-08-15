import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    getResults = (query) => {
    const options = {
        method: 'GET',
        url: (`https://hapi-books.p.rapidapi.com/search/${this.query}`),
        headers: {
            'X-RapidAPI-Key': '034e8ad751msh04db40e1c48a0bbp1064c8jsn4d050130a415',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
}

