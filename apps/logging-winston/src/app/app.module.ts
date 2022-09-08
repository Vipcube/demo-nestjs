import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { utilities, WinstonModule } from "nest-winston";
import { version } from './../../../../package.json';
import * as winston from "winston";

@Module({
  imports: [
    WinstonModule.forRoot({
      defaultMeta: { version: version },
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        utilities.format.nestLike('logging-winstom', { colors: false, prettyPrint: false }),
      ),
      transports: [
        new winston.transports.Console(),
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
