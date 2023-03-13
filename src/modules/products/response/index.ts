import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductResponse {
  @ApiProperty()
  @IsNumber()
  user: number;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  descr: string;

  @ApiProperty()
  @IsString()
  article: string;
}
