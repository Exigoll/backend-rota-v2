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

import { BasketService } from './basket.service';
import { BasketDTO } from './dto';
import { Basket } from './models/basket.model';
import { CreateBasketResponse, GetUserBasketResponse } from './response';

@Controller('baskets')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateBasketResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createBasket(
    @Body() basketDto: BasketDTO,
    @Req() request,
  ): Promise<CreateBasketResponse> {
    const user = request.user;
    return this.basketService.createBasket(user, basketDto);
  }

  @ApiTags('API')
  @ApiResponse({
    status: 200,
    type: GetUserBasketResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Get('get-elements')
  getUserAssets(@Req() request): Promise<Basket[]> {
    const user = request.user;
    return this.basketService.getUserBasket(user.id);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset(
    @Query('id') owner_sku_id: string,
    @Req() request,
  ): Promise<boolean> {
    const { id } = request.user;
    return this.basketService.deleteBasketAsset(id, owner_sku_id);
  }
}
