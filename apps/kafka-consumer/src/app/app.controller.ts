import { Controller, Get, Logger, OnModuleInit, Param } from "@nestjs/common";

import { AppService } from './app.service';
import { Client, ClientKafka, Ctx, EventPattern, KafkaContext, Payload } from "@nestjs/microservices";
import { microserviceConfig } from "../environments/environment";
import { TOPIC_HELLO } from "@demo-nestjs/microservice-constraints";

@Controller()
export class AppController implements OnModuleInit {
  private readonly logger: Logger = new Logger('KafkaConsumerController');
  @Client(microserviceConfig)
  private readonly client: ClientKafka;

  constructor(private readonly appService: AppService) {}

  onModuleInit(): any {
    this.client.subscribeToResponseOf(TOPIC_HELLO);
  }

  @EventPattern(TOPIC_HELLO)
  async consumer(@Payload() payload: any, @Ctx() context: KafkaContext) {
    this.logger.log( payload );
    return this.appService.consumer( payload );
  }
}
