import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID N4LZ-eAr9_KFCvmt9qoSKYHfgG9wfFF43Ed2BaJQvEo'
        },
        params: {
            query: term,
        }
    })
     return response.data.results;
}

export default searchImages;