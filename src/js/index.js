import { CatApi } from "../js/catApi.js";

const api = new CatApi();

const data = api.getFact()
console.log(data)
data.then(resource => {
    console.log(resource)
})
