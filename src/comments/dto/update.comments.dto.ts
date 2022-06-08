import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCommentsDto {
  @ApiProperty({
    description: 'Update content for comments',
  })
  @IsString()
  @IsNotEmpty()
  public text: string;
}
