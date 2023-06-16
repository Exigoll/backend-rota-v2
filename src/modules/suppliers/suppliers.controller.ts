import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { SuppliersDTO } from './dto';
import { SuppliersResponse } from './response';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: SuppliersResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createSuppliers(
    @Body() suppliersDto: SuppliersDTO,
  ): Promise<SuppliersResponse> {
    return this.suppliersService.createSuppliers(suppliersDto);
  }
}
