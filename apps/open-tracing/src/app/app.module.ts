import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JaegerMiddleware, JaegerModule } from "@newtral/nestjs-jaeger";

@Module({
  imports: [
    JaegerModule.forRoot({
      config: {
        serviceName: 'opentracing-service',
        reporter: {
          logSpans: true,
          collectorEndpoint: 'http://localhost:14268/api/traces'
        },
        sampler: {
          type: 'const',
          param: 1
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JaegerMiddleware)
      .forRoutes('*');
  }
}
