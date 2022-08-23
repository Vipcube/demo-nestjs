import { Injectable } from '@nestjs/common';
import { Hero, HeroById } from "@demo-nestjs/grpc-domain";

@Injectable()
export class AppService {
  private readonly heroes: Hero[] = [
    { id: 1, name: 'Stephenh' },
    { id: 2, name: 'Iangregsondev' },
  ];

  async findOne(request: HeroById): Promise<Hero> {
    return this.heroes.find(({ id }) => id === request.id)!;
  }
}
