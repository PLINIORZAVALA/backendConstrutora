import { IsString, IsOptional, IsUrl } from 'class-validator';

export class ImagenCatalogoDto {
  @IsString()
  ruta_imagen: string; // Ruta de la imagen

  @IsString()
  @IsOptional()
  descripcion_imagen?: string; // Descripción opcional de la imagen
}
