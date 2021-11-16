/**
 * Search responsible for interact with Google API Service
 */

require('dotenv').config();

const GOOGLE_API_URL=process.env.GOOGLE_API_URL;
const GOOGLE_KEY=process.env.GOOGLE_KEY;
const CX_SEARCH_ENGINE_ID=process.env.CX_SEARCH_ENGINE_ID;

class GoogleApiService {

    /**
     * Trigger google call
     * @param googleSearch
     * @returns {Promise<Response>}
     */
    getImages(googleSearch) {
        let input = `${GOOGLE_API_URL}?key=${GOOGLE_KEY}&cx=${CX_SEARCH_ENGINE_ID}&q=${googleSearch}&searchType=image&ImgType=jpg&start=1&num=5`;
        return fetch(input);
    }
}

export default new GoogleApiService();