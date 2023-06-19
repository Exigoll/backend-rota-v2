import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SkuNamesResponse {
  @ApiProperty()
  @IsString()
  owner_sku_id: string;

  @ApiProperty()
  @IsString()
  name: string;
}
