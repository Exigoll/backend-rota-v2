import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateOrdersResponse {
  @ApiProperty()
  @IsNumber()
  user: number;

  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  creator_dt: Date;
}

export class GetUserOrdersResponse {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  creator_dt: Date;

  @ApiProperty()
  @IsNumber()
  user: number;
}
