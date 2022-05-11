import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './app/users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:nvig8_password@cluster0.eyo5d.mongodb.net/test'
    ),
    UsersModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
