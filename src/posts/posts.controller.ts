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
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Get array all posts' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'to go',
        content: 'sdfsdsdgdsfgsdfgsfgdsgdfgfsgfsf',
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAll() {
    return this.postsService.getAll();
  }

  @ApiOperation({ summary: 'Get one post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'to go',
        content: 'sdfsdsdgdsfgsdfgsfgdsgdfgfsgfsf',
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.postsService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create new post for user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'to go',
        content: 'sdfsdsdgdsfgsdfgsfgdsgdfgfsgfsf',
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() data: CreatePostDto) {
    return this.postsService.create(data);
  }

  @ApiOperation({ summary: 'Update post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        title: 'to go',
        content: 'sdfsdsdgdsfgsdfgsfgdsgdfgfsgfsf',
      },
    },
  })
  @Put('/:id')
  update(@Body() postData: UpdatePostDto, @Param('id') id: string) {
    return this.postsService.update(postData, id);
  }

  @ApiOperation({ summary: 'Delete post' })
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(id);
  }
}
