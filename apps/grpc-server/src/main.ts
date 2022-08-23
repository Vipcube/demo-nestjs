/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { HERO_PACKAGE_NAME } from "@demo-nestjs/grpc-domain";
import * as path from "path";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: HERO_PACKAGE_NAME,
      protoPath: path.resolve(__dirname, '../../../libs/grpc-domain/proto/hero.proto'),
      url: 'localhost:50051',
    },
  });
  await app.listen();
  Logger.log(
    `🚀 gRPC server Application is running.`
  );
}

bootstrap();
