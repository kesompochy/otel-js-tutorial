import { Controller, Get } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Controller()
export class AppController {
  constructor(
    @InjectConnection() private connection: Connection
  ) {
  }
  @Get('data')
  async getData(): Promise<string> {
    const result = await this.connection.query('SELECT NOW()');
      console.log(result);
      return `Current date and time is ${result['NOW()']}`;
    }
  }
