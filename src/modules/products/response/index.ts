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

export class GetUserAssetsResponse {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  descr: string;

  @ApiProperty()
  @IsString()
  article: string;

  @ApiProperty()
  @IsNumber()
  createAt: string;

  @ApiProperty()
  @IsNumber()
  updateAt: string;

  @ApiProperty()
  @IsNumber()
  user: number;
}
