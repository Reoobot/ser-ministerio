import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  constructor() {
    const mongodbUrl = process.env.MONGODB_URL;
    console.log(`La URL de MongoDB es ${mongodbUrl}`);
  }
}
