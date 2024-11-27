// src/catalogos/catalogos.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';
import { CreateCatalogoDto } from './dto/catalogo/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/catalogo/update-catalogo.dto';

@Controller('api/catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Post('create')  // Corrige la ruta aquí
  async createCatalogo(@Body() createCatalogoDto: CreateCatalogoDto) {
    return await this.catalogosService.create(createCatalogoDto);
  }

  @Put('update/:id')
  async updateCatalogo(
    @Param('id') id: number,
    @Body() updateCatalogoDto: UpdateCatalogoDto,
  ) {
    return await this.catalogosService.update(id, updateCatalogoDto);
  }

  @Get('getAll')
  async getAllCatalogos() {
    return await this.catalogosService.findAll();
  }

  @Get('getById/:id')
  async getCatalogoById(@Param('id') id: number) {
    return await this.catalogosService.findOne(id);
  }

  @Delete('delete/:id')
  async deleteCatalogo(@Param('id') id: number) {
    return await this.catalogosService.remove(id);
  }
}
