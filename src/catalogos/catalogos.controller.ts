import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { CatalogosService } from './catalogos.service';
import { CreateCatalogoDto } from './dto/catalogo/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/catalogo/update-catalogo.dto';
import { UpdateImagenCatalogoDto } from './dto/imagenCatalogo/UpdateImagen.dto';

@Controller('catalogos')
export class CatalogosController {
  constructor(private readonly catalogosService: CatalogosService) {}

  // Ruta para crear un nuevo catálogo
  @Post()
  async create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return await this.catalogosService.create(createCatalogoDto);
  }

  // Ruta para obtener todos los catálogos
  @Get()
  async findAll() {
    return await this.catalogosService.findAll();
  }

  // Ruta para obtener un catálogo por su ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.catalogosService.findOne(id);
  }

  // Ruta para actualizar un catálogo
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCatalogoDto: UpdateCatalogoDto,
  ) {
    return await this.catalogosService.update(id, updateCatalogoDto);
  }

  // Ruta para eliminar un catálogo
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.catalogosService.remove(id);
  }

  // Ruta para crear una imagen adicional en un catálogo
  @Post(':id/imagen')
  async createImagenAdicional(
    @Param('id') catalogoId: number, 
    @Body() imagenDto: { ruta_imagen: string, descripcion_imagen: string }
  ) {
    try {
      const imagen = await this.catalogosService.createImagenAdicional(catalogoId, imagenDto.ruta_imagen, imagenDto.descripcion_imagen);
      return imagen;
    } catch (error) {
      throw new HttpException('Error al crear imagen', HttpStatus.BAD_REQUEST);
    }
  }

  // Ruta para obtener todas las imágenes adicionales de un catálogo
  @Get(':id/imagenes')
  async findAllImagenesAdicionales(@Param('id') catalogoId: number) {
    return await this.catalogosService.findAllImagenesAdicionales(catalogoId);
  }

  // Ruta para obtener una imagen adicional por su ID
  @Get('imagen/:imagenId')
  async findImagenAdicionalById(@Param('imagenId') imagenId: number) {
    return await this.catalogosService.findImagenAdicionalById(imagenId);
  }

  // Ruta para actualizar una imagen adicional
  @Put('imagen/:imagenId')
  async updateImagenAdicional(
    @Param('imagenId') imagenId: number,
    @Body() { ruta_imagen, descripcion_imagen }: UpdateImagenCatalogoDto,
  ) {
    return await this.catalogosService.updateImagenAdicional(imagenId, ruta_imagen, descripcion_imagen);
  }

  // Ruta para eliminar una imagen adicional
  @Delete('imagen/:imagenId')
  async removeImagenAdicional(@Param('imagenId') imagenId: number) {
    return await this.catalogosService.removeImagenAdicional(imagenId);
  }
}
