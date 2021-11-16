const axios = require('axios');
const sharp = require('sharp');
const AWS = require('aws-sdk');
const crypto = require('crypto');
const s3 = new AWS.S3();

/**
 * Function responsible to download, resize and save an image on S3
 * @param event
 * @returns {Promise<void>}
 */
exports.handler = async (event) => {
    const url = event.Records[0].Sns.Message; //Message from Amazon SNS

    const imageResponse = await axios({url: url, responseType: 'arraybuffer'})
    const buffer2 = Buffer.from(imageResponse.data, 'binary')

    let bufferPromise = await sharp(buffer2)
        .rotate()
        .resize(200)
        .toBuffer()
        .then(data => data)
        .catch(console.log);

    const dstKey = crypto.createHash("sha256")
        .update(url)
        .digest("hex");

    try {
        const destparams = {
            Bucket: "BUCKET_NAME",
            Key: dstKey,
            Body: bufferPromise,
            ContentType: "jpeg"
        };

        await s3.putObject(destparams).promise();
    } catch (error) {
        console.log(error);
        return;
    }
};

