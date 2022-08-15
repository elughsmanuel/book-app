import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try{
            const options = {
                method: 'GET',
                url: `https://api.itbook.store/1.0/search/${this.query}`,
              };
              
            const response = axios.request(options)
            this.result = (await response).data.books
            console.log(this.result);
        }
        catch(err){
            console.log(err);
        }    
    }
   
}

