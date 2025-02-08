import { DBOS } from '@dbos-inc/dbos-sdk';
import { CKafka, CKafkaConsume } from '@dbos-inc/dbos-confluent-kafka'
import { DefaultKafkaConfig, topic } from "../defs/kafka";
import {
  KafkaJS,
} from "@confluentinc/kafka-javascript";


@CKafka(DefaultKafkaConfig)
export class KafkaConsumer {
  @CKafkaConsume(topic)
  @DBOS.workflow()
  static async kafkaConsumeWorkflow(topic: string, partition: number, message: KafkaJS.Message) {
      console.info(`Message received: ${message.value?.toString()}`);
      return Promise.resolve();
  }
}