import { Controller, Get, Param } from "@nestjs/common";

import { AppService } from './app.service';
import { Hero, HeroById } from "@demo-nestjs/grpc-domain";
import { Observable } from "rxjs";

@Controller('heroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  async findOne( @Param('id') id: number): Promise<Observable<Hero>> {
    return await this.appService.findOne( { id: id } );
  }
}
