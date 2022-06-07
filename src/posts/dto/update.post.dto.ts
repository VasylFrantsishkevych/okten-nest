import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdatePostDto {
  @ApiProperty({
    example: 'New history',
    description: 'New name for post',
  })
  @IsString()
  @Length(4, 40)
  public title: string;

  @ApiProperty({
    example: 'This history starts with...',
    description: 'update content for post',
  })
  @IsString()
  @Length(10)
  public content: string;
}
