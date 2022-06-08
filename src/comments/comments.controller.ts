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
import { CommentsService } from './comments.service';
import { CreateCommentsDto, UpdateCommentsDto } from './dto';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Get array comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        text: 'Good Good Good Good Good Good',
        authorId: 1,
        postId: 3,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAll() {
    return this.commentsService.getAll();
  }

  @ApiOperation({ summary: 'Get one comment' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        text: 'Good Good Good Good Good Good',
        authorId: 1,
        postId: 3,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.commentsService.getOneById(id);
  }

  @ApiOperation({ summary: 'Create new comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        text: 'Good Good Good Good Good Good',
        authorId: 1,
        postId: 3,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() data: CreateCommentsDto) {
    return this.commentsService.create(data);
  }

  @ApiOperation({ summary: 'Update text for comment by id' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        text: 'Good Good Good Good Good Good',
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Put('/:id')
  update(@Param('id') id: string, @Body() commentData: UpdateCommentsDto) {
    return this.commentsService.update(id, commentData);
  }

  @ApiOperation({ summary: 'Delete comment by id' })
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.commentsService.delete(id);
  }
}
