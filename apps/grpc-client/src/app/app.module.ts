import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from "@nestjs/microservices";
import * as path from "path";
import { HERO_PACKAGE_NAME, HEROES_SERVICE_NAME } from "@demo-nestjs/grpc-domain";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: HEROES_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: HERO_PACKAGE_NAME,
          protoPath: path.resolve(__dirname, '../../../libs/grpc-domain/proto/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
