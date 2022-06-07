import { Module } from '@nestjs/common';

import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [PostsService, PrismaService],
  imports: [],
  controllers: [PostsController],
})
export class PostsModule {}
