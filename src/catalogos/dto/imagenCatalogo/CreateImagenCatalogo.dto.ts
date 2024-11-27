// src/catalogos/dto/create-imagen-catalogo.dto.ts
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class ImagenCatalogoDto {
  @IsString()
  @IsNotEmpty()
  ruta_imagen: string; // Ruta de la imagen

  @IsOptional()  // El campo es opcional
  @IsString()
  descripcion_imagen: string; // Descripción de la imagen
}
