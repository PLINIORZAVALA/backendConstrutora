// src/catalogos/catalogos.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';

@Injectable()
export class CatalogosService {
  // Método para crear un catálogo
  create(createCatalogoDto: CreateCatalogoDto) {
    return 'Este método creará un catálogo';
  }

  // Método para obtener todos los catálogos
  findAll() {
    return 'Este método devolverá todos los catálogos';
  }

  // Método para obtener un catálogo por id
  findOne(id: number) {
    return `Este método devolverá el catálogo con id ${id}`;
  }

  // Método para actualizar un catálogo
  update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    return `Este método actualizará el catálogo con id ${id}`;
  }

  // Método para eliminar un catálogo
  remove(id: number) {
    return `Este método eliminará el catálogo con id ${id}`;
  }
}
