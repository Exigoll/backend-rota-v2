import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { OrderStatusDTO } from './dto';
import { OrderStatusService } from './order-status.service';
import { OrderStatusResponse } from './response';

@Controller('order-status')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: OrderStatusResponse })
  @UseGuards(JwtAuthGuard)
  @Post()
  createOrderStatus(
    @Body() orderStatusDto: OrderStatusDTO,
  ): Promise<OrderStatusResponse> {
    return this.orderStatusService.createOrderStatus(orderStatusDto);
  }
}
