import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  getOneById(postId: string): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: { id: Number(postId) },
    });
  }

  create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }

  update(postData: Prisma.PostCreateInput, postId: string): Promise<Post> {
    return this.prismaService.post.update({
      where: { id: Number(postId) },
      data: { title: postData.title, content: postData.content },
    });
  }

  delete(postId: string): Promise<Post> {
    return this.prismaService.post.delete({
      where: { id: Number(postId) },
    });
  }
}
