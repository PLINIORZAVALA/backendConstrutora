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

  // MÉTODO PARA CREAR UN CATÁLOGO
  //Codigo mas simple para obtner los datos
  /*async create(createCatalogoDto: CreateCatalogoDto) {
    const catalogo = this.catalogoRepository.create(createCatalogoDto);
    return await this.catalogoRepository.save(catalogo);
  }*/
 //Codigo para tener mejor control
  async create(createCatalogoDto: CreateCatalogoDto) {
    const newCatalogo = this.catalogoRepository.create({
      nombre: createCatalogoDto.nombre,
      tipo: createCatalogoDto.tipo,
      descripcion: createCatalogoDto.descripcion,
      imagen: createCatalogoDto.imagen,
    });
    return await this.catalogoRepository.save(newCatalogo);
  }

  // Método para obtener todos los catálogos
  async findAll() {
    return await this.catalogoRepository.find();
  }

  // Método para obtener un catálogo por id
  async findOne(id: number) {
    return await this.catalogoRepository.findOne({ where: { id } });
  }

  //MÉTODO PARA ACTUALIZAR UN CÁTALOGO
  /*async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    await this.catalogoRepository.update(id, updateCatalogoDto);
    return this.findOne(id);
  }*/
  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
     // Buscar el catálogo por ID
    const catalogo = await this.catalogoRepository.findOne({ where: { id } });
    
     if (!catalogo) {
      return { msg: 'Catálogo no encontrado', success: false };
     }
    
     // Asignar valores específicos del DTO a los atributos del catálogo
     catalogo.nombre = updateCatalogoDto.nombre ?? catalogo.nombre;
     catalogo.descripcion = updateCatalogoDto.descripcion ?? catalogo.descripcion;
     catalogo.tipo = updateCatalogoDto.tipo ?? catalogo.tipo;
     catalogo.imagen = updateCatalogoDto.imagen ?? catalogo.imagen;
    
    // Guardar los cambios en la base de datos
    await this.catalogoRepository.save(catalogo);
    
     return {
       msg: 'Catálogo actualizado con éxito',
       success: true,
       data: catalogo,
     };
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
