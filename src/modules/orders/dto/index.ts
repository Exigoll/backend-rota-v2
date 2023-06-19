import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OrdersDTO {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  creator_dt: Date;
}
