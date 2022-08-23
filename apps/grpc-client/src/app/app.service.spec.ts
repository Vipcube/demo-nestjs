import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to grpc-client!"', () => {
      expect(service.findOne({id:2})).toEqual({
        "id": 2,
        "name": "Iangregsondev"
      });
    });
  });
});
