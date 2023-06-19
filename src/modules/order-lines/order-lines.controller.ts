import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { OrderLinesDTO } from './dto';
import { OrderLinesService } from './order-lines.service';
import { OrderLinesResponse } from './response';

@Controller('order-lines')
export class OrderLinesController {
  constructor(private readonly orderLinesService: OrderLinesService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: OrderLinesResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createOrderLines(
    @Body() orderLinesDto: OrderLinesDTO,
  ): Promise<OrderLinesResponse> {
    return this.orderLinesService.createOrderLines(orderLinesDto);
  }
}
