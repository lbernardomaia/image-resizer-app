require('dotenv').config();

const imageResizerUrl=process.env.IMAGE_RESIZER_URL;
const xApiKey=process.env.IMAGE_RESIZER_X_API_KEY;

/**
 * Search responsible for interact with the backend running on AWS
 */
class ResizeImageService {

    /**
     * GetImages already resized
     * @returns {Promise<Response>}
     */
    getImages() {
        return fetch(imageResizerUrl, {
            method: 'get',
            headers: {
                'x-api-key': xApiKey
            }
        });
    }

    /**
     * Send Images to be resized
     * @param url
     * @returns {Promise<Response>}
     */
    sendImage(url) {
        let data = {
            url: url
        };

        return fetch(imageResizerUrl, {
            method: 'post',
            headers: {
                'x-api-key': xApiKey
            },
            body: JSON.stringify(data)
        });
    }

    /**
     * Delete image resized
     * @param key
     * @returns {Promise<Response>}
     */
    delete(key) {
        let data = {
            key: key
        };

        return fetch(imageResizerUrl, {
            method: 'delete',
            headers: {
                'x-api-key': xApiKey
            },
            body: JSON.stringify(data)
        });
    }
}

export default new ResizeImageService();