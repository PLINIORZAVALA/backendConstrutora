import { IsArray, IsOptional, IsInt } from 'class-validator';

export class UpdateImagenesAdicionalesDto {
  @IsOptional()
  @IsArray()
  imagenesAdicionales?: { 
    ruta_imagen: string; 
    descripcion_imagen: string; 
  }[];

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  eliminarImagenesAdicionales?: number[];  // Arreglo de IDs de imágenes a eliminar
}
