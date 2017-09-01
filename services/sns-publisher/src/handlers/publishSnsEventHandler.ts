import * as AWS from 'aws-sdk';

export function publishSnsEventHandler(event, context) {
    try {
        let eventText = JSON.stringify(event, null, 2);
        console.log("Received event:", eventText);
        let sns = new AWS.SNS();
        let params = {
            Message: eventText, 
            Subject: "Test SNS From Lambda",
            TopicArn: "arn:aws:sns:us-west-2:123456789012:test-topic1"
        };
        sns.publish(params, context.done);
    } catch(e) {
        console.log.apply(console, e);
    }
    
}