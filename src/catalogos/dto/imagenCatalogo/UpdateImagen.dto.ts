import { IsArray, IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateImagenCatalogoDto {
  @IsOptional()
  @IsArray()
  imagenesAdicionales?: { 
    ruta_imagen: string;  // Ruta de la imagen
    descripcion_imagen: string;  // Descripción de la imagen
  }[];  // Arreglo de imágenes a actualizar

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  eliminarImagenesAdicionales?: number[];  // Arreglo de IDs de imágenes a eliminar
}
