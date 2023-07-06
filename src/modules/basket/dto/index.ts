import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BasketDTO {
  @ApiProperty()
  @IsNumber()
  owner_user_id: number;

  @ApiProperty()
  @IsNumber()
  owner_sku_id: number;

  @ApiProperty()
  @IsNumber()
  qty: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  supplier_id: number;
}
