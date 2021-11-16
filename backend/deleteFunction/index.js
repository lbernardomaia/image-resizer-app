const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/**
 * Function responsible for delete an image from S3
 * @param event
 * @returns {Promise<{statusCode: number}>}
 */
exports.handler = async (event) => {
    const response = {
        statusCode: 200
    };

    try {
        const destparams = {
            Bucket: "BUCKET_NAME",
            Key: (event.key),

        };

        await s3.deleteObject(destparams).promise();
    } catch (error) {
        console.log(error);
        return;
    }

    return response;
};
