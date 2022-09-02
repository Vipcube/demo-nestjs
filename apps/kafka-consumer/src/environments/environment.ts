import { KafkaOptions, Transport } from "@nestjs/microservices";

export const environment = {
  production: false,
};

const brokers: string[] = JSON.parse(process.env.KAFKA_BROKERS);

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'kafka-consumer',
      brokers: brokers.length > 0 ? brokers : ["localhost:9092"],
    },
    consumer: {
      groupId: 'hello',
      allowAutoTopicCreation: true,
    },
  }
};
