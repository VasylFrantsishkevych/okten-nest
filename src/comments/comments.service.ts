import { Injectable } from '@nestjs/common';
import { Comment, Prisma } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<Comment[]> {
    return this.prismaService.comment.findMany();
  }

  getOneById(commentId: string): Promise<Comment> {
    return this.prismaService.comment.findUnique({
      where: { id: Number(commentId) },
    });
  }

  create(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prismaService.comment.create({ data });
  }

  update(
    commentId: string,
    commentData: Prisma.CommentUpdateInput,
  ): Promise<Comment> {
    return this.prismaService.comment.update({
      where: { id: Number(commentId) },
      data: { text: commentData.text },
    });
  }

  delete(commentId: string): Promise<Comment> {
    return this.prismaService.comment.delete({
      where: { id: Number(commentId) },
    });
  }
}
