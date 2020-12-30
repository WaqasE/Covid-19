import { create } from 'apisauce'

const apiClient = create({
    baseURL : 'https://world-population.p.rapidapi.com',
    headers:{
        "x-rapidapi-key": "a48d503accmsh1bc5fd6f132d88dp15ccd0jsnd382528070e6",
        "x-rapidapi-host": "world-population.p.rapidapi.com",
        "useQueryString": true
    }
});

export default apiClient;

