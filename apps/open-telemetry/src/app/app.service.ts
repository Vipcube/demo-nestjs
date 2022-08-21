import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');
  getData(): { message: string } {
    this.logger.log("test");
    return { message: 'Welcome to open-telemetry!' };
  }
}
