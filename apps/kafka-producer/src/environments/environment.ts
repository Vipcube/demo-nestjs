import {KafkaOptions, Transport} from "@nestjs/microservices";

export const environment = {
  production: false,
};

export const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'kafka-producer',
      brokers: ["localhost:9092"],
    },
    producer: {
      allowAutoTopicCreation: true
    },
    producerOnlyMode: true
  }
};
