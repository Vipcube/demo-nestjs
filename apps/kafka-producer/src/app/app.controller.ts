import { Controller, Get, Param } from "@nestjs/common";

import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:name')
  producer(@Param('name') name: string) {
    return this.appService.producer(name);
  }
}
