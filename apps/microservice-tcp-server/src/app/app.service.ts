import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
