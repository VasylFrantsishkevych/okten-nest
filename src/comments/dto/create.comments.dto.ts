import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateCommentsDto {
  @ApiProperty({
    description: 'Write content for comments',
  })
  @IsString()
  @Length(20)
  @IsNotEmpty()
  public text: string;

  @ApiProperty({
    example: '2',
    description: 'Id author which write this comment',
  })
  @IsNumber()
  @IsNotEmpty()
  public authorId: number;

  @ApiProperty({
    example: '1',
    description: 'Id post which write this comment',
  })
  @IsNumber()
  @IsNotEmpty()
  public postId: number;
}
