import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get array users' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        email: 'pasha@s.ua',
        name: 'Pasha',
        city: 'Brody',
        status: false,
        age: 23,
        password: '1asar',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAll() {
    return this.usersService.getAll();
  }

  @ApiOperation({ summary: 'Get one user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        email: 'pasha@s.ua',
        name: 'Pasha',
        city: 'Brody',
        status: false,
        age: 23,
        password: '1asar',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.usersService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create new user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        email: 'pasha@s.ua',
        name: 'Pasha',
        city: 'Brody',
        status: false,
        age: 23,
        password: '1asar',
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @ApiOperation({ summary: 'Update user by id' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        name: 'Pasha',
        city: 'Brody',
        age: 23,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  updateUser(@Body() userData: UpdateUserDto, @Param('id') id: string) {
    return this.usersService.updateUser(userData, id);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
