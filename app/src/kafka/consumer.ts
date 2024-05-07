import { KafkaConfig, KafkaMessage} from "kafkajs";
import { Workflow, WorkflowContext, Kafka, KafkaConsume } from '@dbos-inc/dbos-sdk';
import { brokers, clientId, topic } from "../defs/kafka";

const kafkaConfig: KafkaConfig = {
    brokers: brokers,
    clientId: clientId,
};

@Kafka(kafkaConfig)
export class KafkaConsumer {
  @KafkaConsume(topic)
  @Workflow()
  static async kafkaConsumeWorkflow(ctxt: WorkflowContext, topic: string, partition: number, message: KafkaMessage) {
      ctxt.logger.info(`Message received: ${message.value?.toString()}`);
      return Promise.resolve();
  }
}