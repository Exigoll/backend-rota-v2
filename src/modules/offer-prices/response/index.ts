import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OfferPricesResponse {
  @ApiProperty()
  @IsString()
  price_list_id: string;

  @ApiProperty()
  @IsString()
  supplier_id: string;

  @ApiProperty()
  @IsString()
  sku_id: string;

  @ApiProperty()
  @IsString()
  price: string;
}
