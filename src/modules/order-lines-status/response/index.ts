import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OrderLinesStatusResponse {
  @ApiProperty()
  @IsString()
  owner_order_line_id: string;

  @ApiProperty()
  @IsString()
  owner_status_id: string;

  @ApiProperty()
  @IsString()
  qty: string;
}
