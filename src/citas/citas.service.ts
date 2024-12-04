import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entity/citas.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { ShowCitaDto } from './dto/show-cita.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  // Crear una nueva cita
  async create(createCitaDto: CreateCitaDto): Promise<Cita> {
    const cita = this.citaRepository.create(createCitaDto);
    return await this.citaRepository.save(cita);
  }

  // Obtener todas las citas
  async findAll(): Promise<Cita[]> {
    return await this.citaRepository.find();
  }

  // Obtener una cita por ID
  async findOne(id: number): Promise<Cita> {
    return await this.citaRepository.findOne({ where: { id } });
  }

  // Actualizar una cita
  async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
    await this.citaRepository.update(id, updateCitaDto);
    return await this.findOne(id);
  }

  // Eliminar una cita
  async remove(id: number): Promise<void> {
    await this.citaRepository.delete(id);
  }

  // Mostrar una cita específica con sus detalles
  async show(id: number): Promise<ShowCitaDto> {
    const cita = await this.findOne(id);
    return {
      nombre: cita.nombre,      // Se asume que estos campos existen en la entidad Cita
      apellido: cita.apellido,
      email: cita.email,
      telefono: cita.telefono,
      fecha: cita.fecha,        // Cambiado para coincidir con la nueva propiedad 'fecha'
      motivo: cita.motivo,      // Cambiado para coincidir con la nueva propiedad 'motivo'
      estado: cita.estado,
      usuario: cita.usuario ? cita.usuario.username : 'Admin', // Suponiendo que la relación con User tiene un campo 'username'
      fechaCreacion: cita.fechaCreacion,
      fechaActualizacion: cita.fechaActualizacion,
    };
  }
}
