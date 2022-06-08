import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'Pasha', description: 'Name user' })
  @IsString()
  @Length(2, 15)
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ example: '12', description: 'Age user' })
  @IsNumber()
  public age: number;

  @ApiProperty({ example: 'Lviv', description: 'City user' })
  @IsString()
  public city: string;
}
