import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './app/users/users.module';
import { CodesModule } from './app/codes/codes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nvig8_user:nvig8_password@cluster0.eyo5d.mongodb.net/navig8_db'
    ),
    UsersModule,
    CodesModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
