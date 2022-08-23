import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Hero, HeroById, HEROES_SERVICE_NAME, HeroesServiceClient } from "@demo-nestjs/grpc-domain";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class AppService implements OnModuleInit {
  @Inject(HEROES_SERVICE_NAME)
  private readonly proxy: ClientGrpc;
  private client: HeroesServiceClient;

  onModuleInit(): any {
    this.client = this.proxy.getService<HeroesServiceClient>(HEROES_SERVICE_NAME);
  }

  async findOne(query: HeroById): Promise<Observable<Hero>> {
    return this.client.findOne( query );
  }
}
