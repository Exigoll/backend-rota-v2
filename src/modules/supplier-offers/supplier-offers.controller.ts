import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { SupplierOffersDTO } from './dto';
import { SupplierOffersResponse } from './response';
import { SupplierOffersService } from './supplier-offers.service';

@Controller('supplier-offers')
export class SupplierOffersController {
  constructor(private readonly supplierOffersService: SupplierOffersService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: SupplierOffersResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createSupplierOffers(
    @Body() supplierOffersDto: SupplierOffersDTO,
  ): Promise<SupplierOffersResponse> {
    return this.supplierOffersService.createSupplierOffers(supplierOffersDto);
  }
}
