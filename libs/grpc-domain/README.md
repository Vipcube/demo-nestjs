# grpc-domain

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build grpc-domain` to build the library.

## Running unit tests

Run `nx test grpc-domain` to execute the unit tests via [Jest](https://jestjs.io).

## Create New Protobuf

1. Define new `.proto` file at `./proto`.
2. Edit `project.json` at `build` phase.
3. Add a following command to `options/commands` show as below:

```shell
# Linux
protoc --plugin=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src --ts_proto_opt=nestJs=true --ts_proto_opt=fileSuffix=.pb ./proto/<Your Proto File>
# Windows
protoc --plugin=node_modules/.bin/protoc-gen-ts_proto.cmd --ts_proto_out=./src --ts_proto_opt=nestJs=true --ts_proto_opt=fileSuffix=.pb ./proto/<Your Proto File>
```

4. Run Building.
5. Edit `src/index.ts` to export generated `*.pb.ts`

> PS: `--ts_proto_opt=nestJs=true` for nestjs framework, if you want to change other type,
> see also [Supported-Options](https://github.com/stephenh/ts-proto#supported-options)
