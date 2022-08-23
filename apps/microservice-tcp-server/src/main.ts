/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

/**
 * This example contains a hybrid application (HTTP + TCP)
 */
async function hybridBootstrap() {
  const port = process.env.PORT || 3005;
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.TCP,
      options: {
        port: 3334,
        retryAttempts: 5,
        retryDelay: 3000
      }
  });

  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: ${await app.getUrl()}`
  );
}

/**
 *  This example contains a pure microservice application
 */
async function bootstrap(){
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
      transport: Transport.TCP,
      options: {
        // host: '127.0.0.1',
        port: 3333,
      }
    }
  )
  await app.listen();
}

bootstrap();
