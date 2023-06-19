import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { OrdersDTO } from './dto';
import { Orders } from './models/orders.model';
import { OrdersService } from './orders.service';
import { CreateOrdersResponse, GetUserOrdersResponse } from './response';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateOrdersResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createOrders(
    @Body() ordersDto: OrdersDTO,
    @Req() request,
  ): Promise<CreateOrdersResponse> {
    const user = request.user;
    return this.ordersService.createOrders(user, ordersDto);
  }

  @ApiTags('API')
  @ApiResponse({
    status: 200,
    type: GetUserOrdersResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Get('get-elements')
  getUserAssets(@Req() request): Promise<Orders[]> {
    const user = request.user;
    return this.ordersService.getUserOrders(user.id);
  }
}
