import { Injectable } from '@nestjs/common';

@Injectable()
export class productService {
  getHello(): string {
    return 'Hello World!';
  }
}
