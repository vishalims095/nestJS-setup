import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/home') // how you rename routing
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {name : string} {
    return {name : 'vishal'}
  }
}
