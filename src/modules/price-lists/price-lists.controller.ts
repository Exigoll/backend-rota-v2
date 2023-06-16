import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { PriceListsDTO } from './dto';
import { PriceListsService } from './price-lists.service';
import { PriceListsResponse } from './response';

@Controller('price-lists')
export class PriceListsController {
  constructor(private readonly priceListsService: PriceListsService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: PriceListsResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createPriceLists(@Body() skuDto: PriceListsDTO): Promise<PriceListsResponse> {
    return this.priceListsService.createPriceLists(skuDto);
  }
}
