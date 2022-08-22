import { Injectable, Logger } from "@nestjs/common";
import {Client, ClientKafka} from '@nestjs/microservices'
import { TOPIC_HELLO } from "@demo-nestjs/microservice-constraints";
import { microserviceConfig } from "../environments/environment";

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger('KafkaProducer');

  @Client(microserviceConfig)
  private readonly client: ClientKafka;

  producer(name: string): { message: string } {
    const content = `hello world with ${name}`;
    this.logger.log(content);
    this.client.emit<any>( TOPIC_HELLO, { message: content } );
    return {
      message: 'producer ok'
    }
  }
}
