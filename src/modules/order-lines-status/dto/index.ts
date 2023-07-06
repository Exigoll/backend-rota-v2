import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrderLinesStatusDTO {
  @ApiProperty()
  @IsNumber()
  owner_order_line_id: number;

  @ApiProperty()
  @IsNumber()
  owner_status_id: number;

  @ApiProperty()
  @IsNumber()
  qty: number;
}
