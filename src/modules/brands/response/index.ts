import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BrandResponse {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;
}
