import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { BrandsService } from './brands.service';
import { BrandsDTO } from './dto';
import { BrandsResponse } from './response';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: BrandsResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createBrands(@Body() brandsDto: BrandsDTO): Promise<BrandsResponse> {
    return this.brandsService.createBrands(brandsDto);
  }
}
