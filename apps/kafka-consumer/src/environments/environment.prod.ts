import { KafkaOptions, Transport } from "@nestjs/microservices";

export const environment = {
  production: true,
};

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'kafka-consumer',
      brokers: [process.env.KAFKA_BROKERS || "localhost:9092"],
    },
    consumer: {
      groupId: 'hello',
      allowAutoTopicCreation: true,
    },
  }
};
