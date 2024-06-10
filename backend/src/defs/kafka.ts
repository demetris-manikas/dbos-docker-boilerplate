import { parseConfigFile } from '@dbos-inc/dbos-sdk/dist/src/dbos-runtime/config';

const [config, ] = parseConfigFile()

export const clientId = 'dbos-app';

export const brokers = (config.env?.brokers ?? '').split(',').map(r => r.trim());

export const topic = 'test-topic';
