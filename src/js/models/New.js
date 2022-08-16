import axios from "axios";


////////////////////////////////////////
// New Book Model

export default class New {
    constructor() {}

    async getResults() {
        try{
            const options = {
                method: 'GET',
                url: `https://api.itbook.store/1.0/new`
              };
              
            const response = axios.request(options)
            this.result = (await response).data.books;
            console.log(this.result);
        }
        catch(error){
            console.log('Error: New Books API Error');
            console.log(error);
        }    
    }  
}

