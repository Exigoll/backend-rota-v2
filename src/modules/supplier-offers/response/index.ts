import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SupplierOffersResponse {
  @ApiProperty()
  @IsString()
  supplier_id: string;

  @ApiProperty()
  @IsString()
  sku_id: string;

  @ApiProperty()
  @IsString()
  base_price: string;

  @ApiProperty()
  @IsString()
  qty: string;
}
