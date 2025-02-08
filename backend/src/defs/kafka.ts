import {
    KafkaConfig,
    logLevel,
} from "@dbos-inc/dbos-confluent-kafka";

export const topic = 'test-topic';

export const DefaultKafkaConfig: KafkaConfig = {
    brokers: (process.env?.brokers ?? '').split(',').map(r => r.trim()),
    clientId: 'app-backend',
    requestTimeout: 100, // FOR TESTING
    retry: { // FOR TESTING
        retries: 5
    },
    logLevel: logLevel.INFO, // FOR TESTING
};
