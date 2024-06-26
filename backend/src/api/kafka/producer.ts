import { GetApi, WorkflowContext } from '@dbos-inc/dbos-sdk';
import { Kafka } from 'kafkajs';
import { brokers, topic } from '../../defs/kafka';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: brokers,
});

export class KafkaProducer {
    @GetApi('/kafka/producer')
    static async kafkaProduce(ctx: WorkflowContext) {
        const producer = kafka.producer();
        await producer.connect();
        const res = await producer.send({
            topic: topic,
            messages: [
                { value: 'Hello KafkaJS user!' },
            ],
        });
        ctx.logger.info(res);
        await producer.disconnect();
        return Promise.resolve('Check the console for your message');
    }
}