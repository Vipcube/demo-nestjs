import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger('KafkaConsumer');

  consumer( payload: any ): void {
    this.logger.log(JSON.stringify(payload) + ' created');
  }
}
