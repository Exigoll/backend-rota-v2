import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SupplierOffersResponse {
  @ApiProperty()
  @IsNumber()
  supplier_id: number;

  @ApiProperty()
  @IsNumber()
  sku_id: number;

  @ApiProperty()
  @IsNumber()
  base_price: number;

  @ApiProperty()
  @IsNumber()
  qty: number;
}
