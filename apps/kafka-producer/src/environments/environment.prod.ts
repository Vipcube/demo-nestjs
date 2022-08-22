import { KafkaOptions, Transport } from "@nestjs/microservices";

export const environment = {
  production: true,
};

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'kafka-producer',
      brokers: ["localhost:9092"],
    },
    consumer: {
      groupId: '1',
      allowAutoTopicCreation: true,
    },
  }
};
