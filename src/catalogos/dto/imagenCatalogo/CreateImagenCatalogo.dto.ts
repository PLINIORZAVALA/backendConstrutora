import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateImagenAdicionalDto {
  @IsString()
  @IsNotEmpty()
  ruta_imagen: string; // Ruta de la imagen

  @IsOptional()  // El campo es opcional
  @IsString()
  descripcion_imagen: string; // Descripción de la imagen
}
