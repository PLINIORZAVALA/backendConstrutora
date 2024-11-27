import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/catalogo/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/catalogo/update-catalogo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { ImagenCatalogo } from './entities/catalogoImg.entity';
import { UpdateImagenCatalogoDto } from './dto/imagenCatalogo/UpdateImagen.dto';

@Injectable()
export class CatalogosService {
  constructor(
    @InjectRepository(Catalogo)
    private readonly catalogoRepository: Repository<Catalogo>,
    @InjectRepository(ImagenCatalogo)
    private readonly imagenCatalogoRepository: Repository<ImagenCatalogo>,
  ) {}

  // Método para crear un catálogo con imágenes
  async create(createCatalogoDto: CreateCatalogoDto) {
    const newCatalogo = this.catalogoRepository.create({
      nombre: createCatalogoDto.nombre,
      tipo: createCatalogoDto.tipo,
      descripcion: createCatalogoDto.descripcion,
      imagen: createCatalogoDto.imagen, // Imagen principal
    });

    const catalogo = await this.catalogoRepository.save(newCatalogo);

    if (createCatalogoDto.imagenesAdicionales && createCatalogoDto.imagenesAdicionales.length > 0) {
      const imagenes = createCatalogoDto.imagenesAdicionales.map(imagenDto => {
        const imagen = this.imagenCatalogoRepository.create({
          ruta_imagen: imagenDto.ruta_imagen,
          descripcion_imagen: imagenDto.descripcion_imagen,
          catalogo: catalogo,
        });
        return imagen;
      });

      await this.imagenCatalogoRepository.save(imagenes);
    }

    return catalogo;
  }

  // Método para obtener todos los catálogos con imágenes asociadas
  async findAll() {
    return await this.catalogoRepository.find({
      relations: ['imagenesAdicionales'],
    });
  }

  // Método para obtener un catálogo específico con imágenes adicionales
  async findOne(id: number) {
    return await this.catalogoRepository.findOne({
      where: { id },
      relations: ['imagenesAdicionales'],
    });
  }

  // Método para actualizar un catálogo y sus imágenes adicionales
  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    const catalogo = await this.catalogoRepository.findOne({
      where: { id },
      relations: ['imagenesAdicionales'],
    });

    if (!catalogo) {
      return { msg: 'Catálogo no encontrado', success: false };
    }

    // Actualizar los datos del catálogo
    catalogo.nombre = updateCatalogoDto.nombre ?? catalogo.nombre;
    catalogo.descripcion = updateCatalogoDto.descripcion ?? catalogo.descripcion;
    catalogo.tipo = updateCatalogoDto.tipo ?? catalogo.tipo;
    catalogo.imagen = updateCatalogoDto.imagen ?? catalogo.imagen;

    // Si hay nuevas imágenes, agregar y asociarlas
    if (updateCatalogoDto.imagenesAdicionales) {
      // Eliminar imágenes adicionales antiguas si es necesario
      if (updateCatalogoDto.eliminarImagenesAdicionales && updateCatalogoDto.eliminarImagenesAdicionales.length > 0) {
        const imagenesAEliminar = catalogo.imagenesAdicionales.filter(imagen =>
          updateCatalogoDto.eliminarImagenesAdicionales.includes(imagen.id)
        );
        if (imagenesAEliminar.length > 0) {
          await this.imagenCatalogoRepository.remove(imagenesAEliminar);
        }
      }

      // Agregar nuevas imágenes
      const imagenes = updateCatalogoDto.imagenesAdicionales.map(imagenDto => {
        const imagen = this.imagenCatalogoRepository.create({
          ruta_imagen: imagenDto.ruta_imagen,
          descripcion_imagen: imagenDto.descripcion_imagen,
          catalogo: catalogo,
        });
        return imagen;
      });

      await this.imagenCatalogoRepository.save(imagenes);
    }

    // Guardar los cambios en el catálogo
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
      if (catalogo.imagenesAdicionales && catalogo.imagenesAdicionales.length > 0) {
        await this.imagenCatalogoRepository.remove(catalogo.imagenesAdicionales);
      }
      await this.catalogoRepository.remove(catalogo);
      return { message: `Catálogo con id ${id} eliminado` };
    }
    return { message: `Catálogo con id ${id} no encontrado` };
  }

  // Método para crear una imagen adicional en el catálogo
  async createImagenAdicional(catalogoId: number, rutaImagen: string, descripcionImagen: string) {
    // Verifica si el catálogo existe
    const catalogo = await this.catalogoRepository.findOne({
      where: { id: catalogoId },
    });
    
    if (!catalogo) {
      throw new HttpException('Catálogo no encontrado', HttpStatus.NOT_FOUND);
    }
    
    const imagen = this.imagenCatalogoRepository.create({
      ruta_imagen: rutaImagen,
      descripcion_imagen: descripcionImagen,
      catalogo,  // Aquí se asigna el objeto completo de catalogo
    });
    
    return await this.imagenCatalogoRepository.save(imagen);
    
  }

  // Método para obtener todas las imágenes adicionales de un catálogo
  async findAllImagenesAdicionales(catalogoId: number) {
    const catalogo = await this.catalogoRepository.findOne({
      where: { id: catalogoId },
      relations: ['imagenesAdicionales'],
    });

    if (!catalogo) {
      throw new Error('Catálogo no encontrado');
    }

    return catalogo.imagenesAdicionales;
  }

  // Método para obtener una imagen adicional por su id
  async findImagenAdicionalById(imagenId: number) {
    const imagen = await this.imagenCatalogoRepository.findOne({
      where: { id: imagenId },
    });

    if (!imagen) {
      throw new Error('Imagen adicional no encontrada');
    }

    return imagen;
  }

  // Método para actualizar una imagen adicional
  async updateImagenAdicional(imagenId: number, rutaImagen: string, descripcionImagen: string) {
    const imagen = await this.imagenCatalogoRepository.findOne({
      where: { id: imagenId },
    });

    if (!imagen) {
      throw new Error('Imagen adicional no encontrada');
    }

    imagen.ruta_imagen = rutaImagen ?? imagen.ruta_imagen;
    imagen.descripcion_imagen = descripcionImagen ?? imagen.descripcion_imagen;

    await this.imagenCatalogoRepository.save(imagen);
    return imagen;
  }

  // Método para eliminar una imagen adicional
  async removeImagenAdicional(imagenId: number) {
    const imagen = await this.imagenCatalogoRepository.findOne({
      where: { id: imagenId },
    });

    if (!imagen) {
      throw new Error('Imagen adicional no encontrada');
    }

    await this.imagenCatalogoRepository.remove(imagen);
    return { message: `Imagen con id ${imagenId} eliminada` };
  }

}
