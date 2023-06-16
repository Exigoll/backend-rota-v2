import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { BrandService } from './brands.service';
import { BrandsDTO } from './dto';
import { BrandResponse } from './response';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: BrandResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createBrands(@Body() brandDto: BrandsDTO): Promise<BrandResponse> {
    return this.brandService.createBrand(brandDto);
  }
}
