import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to grpc-client!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.findOne(2)).toEqual({
        "id": 2,
        "name": "Iangregsondev"
      });
    });
  });
});
