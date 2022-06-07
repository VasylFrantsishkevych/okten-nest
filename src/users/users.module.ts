import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
