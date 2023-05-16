import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      
      useFactory: async (configService: ConfigService) => ({
        uri: process.env.MONGODB_URL,
        useNewUrlParser: true,
        useUnifiedTopology: true,

      }),
      inject: [ConfigService],
    }),
    ImagesModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log(process.env.MONGODB_URL);

