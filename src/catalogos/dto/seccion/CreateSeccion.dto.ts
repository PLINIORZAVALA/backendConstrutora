import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSeccionDto {
  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsNotEmpty()
  usuarioId: number; // Relación con Usuario
}
