import { DBOS } from '@dbos-inc/dbos-sdk';
import { DefaultKafkaConfig, topic } from '../../defs/kafka';

import {
    KafkaProducer,
} from "@dbos-inc/dbos-confluent-kafka";

const kafkaProducer = DBOS.configureInstance(KafkaProducer, 'defaultKafka', DefaultKafkaConfig, topic);
export class KafkaProducerImpl {
    @DBOS.getApi('/kafka/producer')
    @DBOS.workflow()
    static async kafkaProduce() {
        await kafkaProducer.sendMessage({
            value: 'Hello KafkaJS user!'
        })
        return Promise.resolve('Check the console for your message');
    }
}