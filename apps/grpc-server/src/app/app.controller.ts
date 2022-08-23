import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Hero, HeroById, HeroesServiceController, HeroesServiceControllerMethods } from "@demo-nestjs/grpc-domain";

@Controller()
@HeroesServiceControllerMethods()
export class AppController implements HeroesServiceController{
  constructor(private readonly appService: AppService) {}

  async findOne(request: HeroById): Promise<Hero> {
    return this.appService.findOne( request );
  }
}
