import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class SkuDTO {
  @ApiProperty()
  @IsNumber()
  owner_brand_id: number;

  @ApiProperty()
  @IsString()
  article: string;
}
