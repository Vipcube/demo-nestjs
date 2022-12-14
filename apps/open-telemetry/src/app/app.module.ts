import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenTelemetryModule } from '@metinseylan/nestjs-opentelemetry';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";

@Module({
  imports: [
    OpenTelemetryModule.forRoot({
      applicationName: 'open-telemetry-example',
      metricInterval: 1000,
      spanProcessor: new SimpleSpanProcessor(
        new ZipkinExporter({
          serviceName: 'open-telemetry-example',
          url: 'http://localhost:9411/api/v2/spans',
        })
      ),
      metricExporter: new PrometheusExporter({
        endpoint: 'metrics',
        port: 9464,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
