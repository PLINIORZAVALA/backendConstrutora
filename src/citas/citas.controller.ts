import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { ShowCitaDto } from './dto/show-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  // Crear una nueva cita
  @Post()
  async create(@Body() createCitaDto: CreateCitaDto): Promise<ShowCitaDto> {
    const cita = await this.citasService.create(createCitaDto);
    return this.transformCitaToShowDto(cita);
  }

  // Obtener todas las citas
  @Get()
  async findAll(): Promise<ShowCitaDto[]> {
    const citas = await this.citasService.findAll();
    return citas.map(this.transformCitaToShowDto);
  }

  // Obtener una cita por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ShowCitaDto> {
    const cita = await this.citasService.findOne(id);
    return this.transformCitaToShowDto(cita);
  }

  // Actualizar una cita
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCitaDto: UpdateCitaDto,
  ): Promise<ShowCitaDto> {
    const cita = await this.citasService.update(id, updateCitaDto);
    return this.transformCitaToShowDto(cita);
  }

  // Eliminar una cita
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.citasService.remove(id);
  }

  // Función auxiliar para transformar las citas a ShowCitaDto
  private transformCitaToShowDto(cita: any): ShowCitaDto {
    return {
      nombre: cita.nombre,
      apellido: cita.apellido,
      email: cita.email,
      telefono: cita.telefono,
      fecha: cita.fecha,
      motivo: cita.motivo,
      estado: cita.estado,
      usuario: cita.usuario ? cita.usuario.nombre : 'Admin', // Suponiendo que 'nombre' es un campo del modelo User
      fechaCreacion: cita.fechaCreacion,
      fechaActualizacion: cita.fechaActualizacion,
    };
  }
}
