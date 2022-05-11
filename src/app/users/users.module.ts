import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './user.model';
import { UsersController } from './users.controller';
import { UserService } from './users.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),

  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
