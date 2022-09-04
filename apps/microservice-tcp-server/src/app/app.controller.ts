import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";
import { SERVICE_PATTERNS } from "@demo-nestjs/microservice-constraints";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(SERVICE_PATTERNS.MATH_SERVICE.SUM)
  sum(data: number[]): number {
    return this.appService.sum(data);
  }
}
