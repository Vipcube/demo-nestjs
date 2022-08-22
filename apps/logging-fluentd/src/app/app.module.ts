import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
import * as fluentLogger from 'fluent-logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './../environments';

const fluentTransport = fluentLogger.support.winstonTransport();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
      isGlobal: true,
    }),
    WinstonModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        defaultMeta: { app: 'logging-fluentd' },
        transports: [
          new fluentTransport('app', {
            host: config.get<string>('host'),
            port: config.get<number>('port'),
            timeout: config.get<number>('timeout'),
          }),
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.ms(),
              winston.format.prettyPrint(),
              utilities.format.nestLike()
            ),
          }),
        ],
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
