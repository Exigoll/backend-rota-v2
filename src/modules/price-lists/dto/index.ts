import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PriceListsDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;
}