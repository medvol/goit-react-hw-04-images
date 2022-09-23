import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '17376022-5b12512663328c07708b99c13';

export const getImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);   
    
    if (response) {
        return response.data
    }
    return Promise.reject(new Error(`We do not find ${query}`))
}