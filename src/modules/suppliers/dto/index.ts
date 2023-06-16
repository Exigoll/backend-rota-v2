import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SuppliersDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  stock: boolean;
}
