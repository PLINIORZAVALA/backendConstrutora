import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
  @IsBoolean()
  estado: boolean;

  @IsNotEmpty()
  catalogoId: number; // Relación con Catalogo
}
