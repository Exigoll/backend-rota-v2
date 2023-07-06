import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderLinesResponse {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  owner_order_id: number;

  @ApiProperty()
  @IsNumber()
  sku_id: number;

  @ApiProperty()
  @IsNumber()
  supplier_id: number;

  @ApiProperty()
  @IsNumber()
  qty: number;

  @ApiProperty()
  @IsNumber()
  supplier_price: number;

  @ApiProperty()
  @IsNumber()
  client_price: number;
}
