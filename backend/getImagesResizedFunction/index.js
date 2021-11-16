const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/**
 * Function responsible to get all images resized from S3
 * @param event
 * @returns {Promise<{images: *[], statusCode: number}>}
 */

exports.handler = async () => {
    let bucketParams = {
        Bucket: "BUCKET_NAME",
    };

    let allKeys = [];
    try {
        await s3.listObjectsV2(bucketParams).promise()
            .then(function (data) {
                let contents = data.Contents;
                contents.forEach(function (content) {
                    allKeys.push({
                        "key": content.Key,
                        "url": "S3_URL" + content.Key
                    });
                });
            });
    } catch (e) {
        console.log(e)
    }
    return {
        statusCode: 200,
        images: allKeys,
    };
};
