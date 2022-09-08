import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { utilities, WinstonModule } from "nest-winston";
import { version } from './../../../../package.json';
import * as winston from "winston";
import "winston-daily-rotate-file";

@Module({
  imports: [
    WinstonModule.forRoot({
      defaultMeta: { application: 'logging-winstom', version: version },
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
          filename: "logs/logging-winstom-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          maxFiles: "14d",
        })
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
