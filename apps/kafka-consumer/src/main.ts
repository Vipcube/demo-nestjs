/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { microserviceConfig } from "./environments/environment";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, microserviceConfig
  )
  await app.listen();
  Logger.log(
    `🚀 Consumer Application is running`
  );
}

bootstrap();
