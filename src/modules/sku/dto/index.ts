import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SkuDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  owner_brand_id: string;

  @ApiProperty()
  @IsString()
  article: string;
}
