const AWS = require('aws-sdk');

/**
 * Function responsible to add an image to be resized on SNS
 * @param event
 * @returns {Promise<*>}
 */
exports.handler = async (event) => {
    const params = {
        Message: event.url,
        TopicArn: 'TOPIC_ARN'
    };

    const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

    publishTextPromise.then(
        function(data) {
            console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
            console.log("MessageID is " + data.MessageId);
        }).catch(
        function(err) {
            console.error(err, err.stack);
        });

    return publishTextPromise;
};
