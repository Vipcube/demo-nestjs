import { Inject, Injectable, LoggerService } from "@nestjs/common";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  getData(): { message: string } {
    this.logger.log('test winston logging info', AppService.name);
    return { message: 'Welcome to logging-winston!' };
  }
}
