import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBasketResponse {
  @ApiProperty()
  @IsNumber()
  user: number;

  @ApiProperty()
  @IsString()
  owner_sku_id: string;

  @ApiProperty()
  @IsString()
  qty: string;

  @ApiProperty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsString()
  supplier: string;
}

export class GetUserBasketResponse {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  owner_sku_id: string;

  @ApiProperty()
  @IsString()
  qty: string;

  @ApiProperty()
  @IsString()
  price: string;

  @ApiProperty()
  @IsString()
  supplier: string;

  @ApiProperty()
  @IsNumber()
  user: number;
}
