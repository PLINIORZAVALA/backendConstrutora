// src/catalogos/catalogos.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';

@Controller('catalogos')
export class CatalogosController {

  constructor(private readonly catalogosService: CatalogosService) {}

  @Get()
  findAll() {
    return this.catalogosService.findAll();
  }
  
  @Post()
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogosService.create(createCatalogoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catalogosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogosService.update(id, updateCatalogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catalogosService.remove(id);
  }
}
