# Demo NestJS Monorepo with microservices

This monorepo project was generated using [Nx](https://nx.dev).

This project is mainly used for learning/trial about nestjs and boilerplate purposes only.

## Implements Overview

This Microservice implements the following:

- [gRPC Client](./apps/grpc-client)
- [gRPC Server](./apps/grpc-server)
- [Kafka Consumer](./apps/kafka-consumer)
- [Kafka Producer](./apps/kafka-producer)
- [Logging to Fluentd](./apps/logging-fluentd)
- [Open Tracing](./apps/open-tracing)
- [Open Telemetry with Jaeger](./apps/open-telemetry)
- [Example with TCP Client](./apps/microservice-tcp-client)
- [Example with TCP Server](./apps/microservice-tcp-server)

## Install

```shell
npm install --legacy-peer-deps
```

`legacy-peer-deps` flags for old peer dependencies.

## Generate an application

Run `nx g @nrwl/nest:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/nest:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.
> Example: @nrwl/workspace, @nrwl/js, @nrwl/node

Libraries are shareable across libraries and applications. They can be imported from `@demo-nestjs/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
