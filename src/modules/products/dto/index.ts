import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProductDTO {
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
