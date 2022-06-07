import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAll() {
    return this.users;
  }

  getOneById(id: string) {
    return this.users.find((user) => user.id == id);
  }

  createUser(userDto: CreateUserDto) {
    this.users.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }

  deleteById(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  updateById(id: string, updateUserDto: UpdateUserDto) {
    return this.users.find((user) => {
      if (user.id === id) {
        user.username = updateUserDto.username;
        user.email = updateUserDto.email;
        return updateUserDto;
      } else {
        return 'No';
      }
    });
  }
}
