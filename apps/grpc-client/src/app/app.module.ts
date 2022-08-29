import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from "@nestjs/microservices";
import * as path from "path";
import { HERO_PACKAGE_NAME, HEROES_SERVICE_NAME } from "@demo-nestjs/grpc-domain";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.registerAsync([
      {
        name: HEROES_SERVICE_NAME,
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: config.get<string>('GRPC_SERVER') || 'localhost:50051',
            package: HERO_PACKAGE_NAME,
            protoPath: path.resolve(__dirname, '../../../libs/grpc-domain/proto/hero.proto'),
          }
        }),
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
