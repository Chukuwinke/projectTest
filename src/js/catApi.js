import { BaseAxios } from "./app.js";

export class CatApi extends BaseAxios {
    
    constructor(baseUrl){
        super("https://catfact.ninja")

    }
    getFact(){
        return this.getData('/fact')
    }
    getFacts(limit = 10){
        return this.getData(`/facts?limit=${limit}`)
    }
    getBreeds(limit = 5){
        return this.getData(`/breeds?limit=${limit}`)
    }
}