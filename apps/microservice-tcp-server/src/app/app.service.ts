import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger('MathService');

  sum(data: number[]): number {
    this.logger.log(data);
    return data
      .map(v => Number(v))
      .reduce((a, b) => a + b);
  }
}
