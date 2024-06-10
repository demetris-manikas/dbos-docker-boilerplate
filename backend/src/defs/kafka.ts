export const clientId = 'app-backend';
export const brokers = (process.env?.brokers ?? '').split(',').map(r => r.trim());
export const topic = 'test-topic';
