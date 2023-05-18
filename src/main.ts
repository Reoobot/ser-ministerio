import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';


async function bootstrap() {
  dotenv.config();
  
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1")
  app.enableCors()
  await app.listen(3000);
}
bootstrap();