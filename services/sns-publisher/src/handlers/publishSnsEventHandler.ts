import * as AWS from 'aws-sdk';

export function publishSnsEventHandler(event, context) {
    try {
        let eventText = JSON.stringify(event, null, 2);
        console.log("Received event:", eventText);
        
        let sns = new AWS.SNS();
        let params : AWS.SNS.Types.PublishInput = {
            Message: event.pathParameters.event, 
            Subject: event.body,
            TopicArn: process.env.SNS_TOPIC_ARN
        };
        sns.publish(params, context.done);
    } catch(e) {
        console.log.apply(console, e);
    }
    
}