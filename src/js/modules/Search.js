import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults () { //returns a promise!
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = "165f5fb951886799024202be962589be";
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}