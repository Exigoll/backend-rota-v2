import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class SkuNamesResponse {
  @ApiProperty()
  @IsNumber()
  owner_sku_id: number;

  @ApiProperty()
  @IsString()
  name: string;
}
