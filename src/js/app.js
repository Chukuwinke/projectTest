import axios from 'axios';

export class BaseAxios {
    constructor(baseUrl){
        this.baseUrl = baseUrl
        this.instance = axios.create({
            baseUrl
        })
    }

    async getData(url, config = {}){
        const {data} = await this.instance.get(url, config)
        return data
    }
}