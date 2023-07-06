import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OfferPricesResponse {
  @ApiProperty()
  @IsNumber()
  price_list_id: number;

  @ApiProperty()
  @IsNumber()
  supplier_id: number;

  @ApiProperty()
  @IsNumber()
  sku_id: number;

  @ApiProperty()
  @IsNumber()
  price: number;
}
