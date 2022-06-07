import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
