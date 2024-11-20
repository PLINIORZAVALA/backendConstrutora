import { IsString, IsOptional, IsArray, IsUrl } from 'class-validator';
import { ImagenCatalogoDto } from './imagen-catalogo.dto';

export class CreateCatalogoDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string; // Imagen principal (opcional)

  @IsArray()
  @IsOptional()
  imagenesAdicionales?: ImagenCatalogoDto[]; // Relación con las imágenes adicionales
}
