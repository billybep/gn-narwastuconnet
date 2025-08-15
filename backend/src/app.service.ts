import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GN-NARWASTU_CONNECT_API';
  }
}
