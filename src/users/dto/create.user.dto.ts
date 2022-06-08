import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Pasha', description: 'Name user' })
  @IsString()
  @Length(2, 15)
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiProperty({ example: '12', description: 'Age user' })
  @IsNumber()
  public age: number;

  @ApiProperty({ example: 'Lviv', description: 'City user' })
  @IsString()
  public city: string;

  @ApiProperty({ example: '12wer456', description: 'password' })
  @IsString()
  @Length(5, 10)
  public password: string;

  @IsBoolean()
  public status: boolean;
}
