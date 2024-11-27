import { IsArray, IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateImagenCatalogoDto {
  @IsOptional()
  @IsString()
  ruta_imagen?: string;  // Ruta de la imagen

  @IsOptional()
  @IsString()
  descripcion_imagen?: string;  // Descripción de la imagen

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  eliminarImagenesAdicionales?: number[];  // Arreglo de IDs de imágenes a eliminar
}

