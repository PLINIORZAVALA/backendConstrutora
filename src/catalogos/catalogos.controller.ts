import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  @Post(':catalogoId/imagen')
  async createImagenAdicional(
    @Param('catalogoId') catalogoId: number,  // Asegurando que catalogoId sea pasado correctamente
    @Body() createImagenDto: { ruta_imagen: string, descripcion_imagen: string }
  ) {
    return await this.catalogosService.createImagenAdicional(
      catalogoId,
      createImagenDto.ruta_imagen,
      createImagenDto.descripcion_imagen
    );
  }

  @Get(':catalogoId/imagenes')
  async findAllImagenesAdicionales(@Param('catalogoId') catalogoId: number) {
    return await this.catalogosService.findAllImagenesAdicionales(catalogoId);  // Asegurando que catalogoId sea pasado correctamente
  }

  @Get('imagen/:imagenId')
  async findImagenAdicionalById(@Param('imagenId') imagenId: number) {
    return await this.catalogosService.findImagenAdicionalById(imagenId);  // Este método parece estar correcto
  }

  @Put('imagen/:imagenId')
  async updateImagenAdicional(
    @Param('imagenId') imagenId: number,  // Asegurando que imagenId sea pasado correctamente
    @Body() updateImagenDto: { ruta_imagen: string, descripcion_imagen: string }
  ) {
    return await this.catalogosService.updateImagenAdicional(
      imagenId,
      updateImagenDto.ruta_imagen,
      updateImagenDto.descripcion_imagen
    );
  }

  @Delete('imagen/:imagenId')
  async removeImagenAdicional(@Param('imagenId') imagenId: number) {
    return await this.catalogosService.removeImagenAdicional(imagenId);  // Este método parece estar correcto
  }
}
