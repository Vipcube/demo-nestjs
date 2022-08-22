/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { microserviceConfig } from "./environments/environment";
import { MicroserviceOptions } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(microserviceConfig);

  await app.startAllMicroservices();
  await app.listen(3000);
  Logger.log(
    `🚀 Producer Application is running on: ${await app.getUrl()}`
  );
}

bootstrap();
