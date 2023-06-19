import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { OfferPricesDTO } from './dto';
import { OfferPricesService } from './offer-prices.service';
import { OfferPricesResponse } from './response';

@Controller('offer-prices')
export class OfferPricesController {
  constructor(private readonly offerPricesService: OfferPricesService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: OfferPricesResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createOfferPrices(
    @Body() offerPricesDto: OfferPricesDTO,
  ): Promise<OfferPricesResponse> {
    return this.offerPricesService.createOfferPrices(OfferPricesDTO);
  }
}
