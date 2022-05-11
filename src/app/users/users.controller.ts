import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get('')
  async findAll() {
    try {
      const users = await this.usersService.getUsers();
      let data = users;
      return { statusCode: 200, data, message: ['successfully Get'] };
    } catch (err) {
      throw new InternalServerErrorException(err, 'Error Occurred ');
    }
  }

  @Post()
  async addUser(@Body() body: UserDto) {
    try {
      const generatedId = await this.usersService.insertUser(
        body.name,
        body.wallet_address,
        body.is_active,
      );
      let data = { id: generatedId };
      return { statusCode: 200, data, message: ['successfully save'] };
    } catch (err) {
      throw new InternalServerErrorException(err, 'Error Occurred ');
    }
  }
}
