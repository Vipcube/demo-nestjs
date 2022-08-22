import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { MATH_SERVICE, SERVICE_PATTERNS } from "@demo-nestjs/microservice-constraints";

@Injectable()
export class AppService {
  constructor(@Inject(MATH_SERVICE) private client: ClientProxy){}

  sum(data: number[]): Observable<number> {
    return this.client.send<number>(SERVICE_PATTERNS.MATH_SERVICE.SUM, data );
  }
}
