import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { OrderLinesStatusDTO } from './dto';
import { OrderLinesStatusService } from './order-lines-status.service';
import { OrderLinesStatusResponse } from './response';

@Controller('order-lines-status')
export class OrderLinesStatusController {
  constructor(
    private readonly orderLinesStatusService: OrderLinesStatusService,
  ) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: OrderLinesStatusResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createOrderLinesStatus(
    @Body() orderLinesStatusDto: OrderLinesStatusDTO,
  ): Promise<OrderLinesStatusResponse> {
    return this.orderLinesStatusService.createOrderLinesStatus(
      orderLinesStatusDto,
    );
  }
}
