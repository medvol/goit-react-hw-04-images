import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '17376022-5b12512663328c07708b99c13';

export const getImages = async (query) => {
    const response = await axios.get(`?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    
    return response.data.hits
}