import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto';
import { AuthUserDto } from './dto/auth-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async login(authDto: AuthUserDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const findUser = await this.usersService.getUserByEmail(userDto.email);
    if (findUser) {
      throw new HttpException('User is exist', HttpStatus.BAD_REQUEST);
    }
    const hashPass = await bcrypt.hash(userDto.password, 7);
    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPass,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, name: user.name };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(user: AuthUserDto) {
    const userDB = await this.usersService.getUserByEmail(user.email);
    const passEqual = await bcrypt.compare(user.password, userDB.password);
    if (userDB && passEqual) {
      return userDB;
    }
    throw new UnauthorizedException({ message: 'wrong email or password' });
  }
}
