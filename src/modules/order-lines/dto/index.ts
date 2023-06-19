import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OrderLinesDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  owner_order_id: string;

  @ApiProperty()
  @IsString()
  sku_id: string;

  @ApiProperty()
  @IsString()
  supplier_id: string;

  @ApiProperty()
  @IsString()
  qty: string;

  @ApiProperty()
  @IsString()
  supplier_price: string;

  @ApiProperty()
  @IsString()
  client_price: string;
}
