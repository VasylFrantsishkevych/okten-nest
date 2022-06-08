import { Module } from '@nestjs/common';

import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from '../core/prisma.service';

@Module({
  providers: [CommentsService, PrismaService],
  imports: [],
  controllers: [CommentsController],
})
export class CommentsModule {}
