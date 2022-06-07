import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'New history',
    description: 'Name post',
  })
  @IsString()
  @Length(5, 40)
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example: 'This history starts with...',
    description: 'Write content for post',
  })
  @IsString()
  @Length(30)
  public content: string;

  @ApiProperty({
    example: '2',
    description: 'Id author which create this post',
  })
  @IsNumber()
  @IsNotEmpty()
  public authorId: number;
}
