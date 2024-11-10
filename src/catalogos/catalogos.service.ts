// src/catalogos/catalogos.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalogo } from './entities/catalogo.entity';

@Injectable()
export class CatalogosService {

  constructor(
    @InjectRepository(Catalogo)
    private catalogoRepository: Repository<Catalogo>,
  ) {}

  // Método para crear un catálogo
  async create(createCatalogoDto: CreateCatalogoDto) {
    const catalogo = this.catalogoRepository.create(createCatalogoDto);
    return await this.catalogoRepository.save(catalogo);
  }

  // Método para obtener todos los catálogos
  async findAll() {
    return await this.catalogoRepository.find();
  }

  // Método para obtener un catálogo por id
  async findOne(id: number) {
    return await this.catalogoRepository.findOne({ where: { id } });
  }

  // Método para actualizar un catálogo
  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    await this.catalogoRepository.update(id, updateCatalogoDto);
    return this.findOne(id);
  }

  // Método para eliminar un catálogo
  async remove(id: number) {
    const catalogo = await this.findOne(id);
    if (catalogo) {
      await this.catalogoRepository.remove(catalogo);
      return { message: `Catalogo with id ${id} removed` };
    }
    return { message: `Catalogo with id ${id} not found` };
  }
}
