import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { SkuNamesDTO } from './dto';
import { SkuNamesResponse } from './response';
import { SkuNamesService } from './sku-names.service';

@Controller('sku-names')
export class SkuNamesController {
  constructor(private readonly skuNamesService: SkuNamesService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: SkuNamesResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createSkuNames(@Body() skuDto: SkuNamesDTO): Promise<SkuNamesResponse> {
    return this.skuNamesService.createSkuNames(skuDto);
  }
}
