import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.usersService.getOneById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteById(+id);
  }
}
