import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/catalogo/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/catalogo/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { ImagenCatalogo } from './entities/catalogoImg.entity';

@Injectable()
export class CatalogosService {
  constructor(
    @InjectRepository(Catalogo)
    private catalogoRepository: Repository<Catalogo>,
    @InjectRepository(ImagenCatalogo)
    private imagenCatalogoRepository: Repository<ImagenCatalogo>,
  ) {}

  // MÉTODO PARA CREAR UN CATÁLOGO CON IMÁGENES
  async create(createCatalogoDto: CreateCatalogoDto) {
    // Crear un nuevo catálogo
    const newCatalogo = this.catalogoRepository.create({
      nombre: createCatalogoDto.nombre,
      tipo: createCatalogoDto.tipo,
      descripcion: createCatalogoDto.descripcion,
      imagen: createCatalogoDto.imagen, // Imagen principal
    });

    // Guardamos el catálogo en la base de datos
    const catalogo = await this.catalogoRepository.save(newCatalogo);

    // Si hay imágenes adicionales, asociarlas con el catálogo
    if (createCatalogoDto.imagenesAdicionales && createCatalogoDto.imagenesAdicionales.length > 0) {
      const imagenes = createCatalogoDto.imagenesAdicionales.map(imagenDto => {
        const imagen = this.imagenCatalogoRepository.create({
          ruta_imagen: imagenDto.ruta_imagen,
          descripcion_imagen: imagenDto.descripcion_imagen,
          catalogo: catalogo,  // Asociamos la imagen al catálogo recién creado
        });
        return imagen;
      });
      
      await this.imagenCatalogoRepository.save(imagenes);
    }

    return catalogo;
  }

  // Método para obtener todos los catálogos con las imágenes asociadas
  async findAll() {
    return await this.catalogoRepository.find({
      relations: ['imagenesAdicionales'],  // Aseguramos que cargamos las imágenes adicionales asociadas
    });
  }

  // Método para obtener un catálogo por id con sus imágenes adicionales
  async findOne(id: number) {
    return await this.catalogoRepository.findOne({
      where: { id },
      relations: ['imagenesAdicionales'],  // Incluimos las imágenes adicionales asociadas al catálogo
    });
  }

  // MÉTODO PARA ACTUALIZAR UN CÁTALOGO
  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    const catalogo = await this.catalogoRepository.findOne({ where: { id }, relations: ['imagenesAdicionales'] });

    if (!catalogo) {
      return { msg: 'Catálogo no encontrado', success: false };
    }

    // Actualizamos los campos del catálogo
    catalogo.nombre = updateCatalogoDto.nombre ?? catalogo.nombre;
    catalogo.descripcion = updateCatalogoDto.descripcion ?? catalogo.descripcion;
    catalogo.tipo = updateCatalogoDto.tipo ?? catalogo.tipo;
    catalogo.imagen = updateCatalogoDto.imagen ?? catalogo.imagen;

    // Si se incluye una nueva imagen principal, la actualizamos
    if (updateCatalogoDto.imagen) {
      catalogo.imagen = updateCatalogoDto.imagen;
    }

    // Si se incluyen nuevas imágenes adicionales, las agregamos
    if (updateCatalogoDto.imagenesAdicionales) {
      const imagenes = updateCatalogoDto.imagenesAdicionales.map(imagenDto => {
        const imagen = this.imagenCatalogoRepository.create({
          ruta_imagen: imagenDto.ruta_imagen,
          descripcion_imagen: imagenDto.descripcion_imagen,
          catalogo: catalogo,  // Asociamos las nuevas imágenes al catálogo
        });
        return imagen;
      });

      await this.imagenCatalogoRepository.save(imagenes);
    }

    // Guardamos los cambios en el catálogo
    await this.catalogoRepository.save(catalogo);

    return {
      msg: 'Catálogo actualizado con éxito',
      success: true,
      data: catalogo,
    };
  }

  // Método para eliminar un catálogo y sus imágenes asociadas
  async remove(id: number) {
    const catalogo = await this.findOne(id);
    if (catalogo) {
      // Eliminar las imágenes asociadas al catálogo antes de eliminar el catálogo
      if (catalogo.imagenesAdicionales && catalogo.imagenesAdicionales.length > 0) {
        await this.imagenCatalogoRepository.remove(catalogo.imagenesAdicionales);
      }
      await this.catalogoRepository.remove(catalogo);
      return { message: `Catálogo con id ${id} eliminado` };
    }
    return { message: `Catálogo con id ${id} no encontrado` };
  }
}
