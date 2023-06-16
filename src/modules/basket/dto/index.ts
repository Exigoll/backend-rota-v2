import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BasketDTO {
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
