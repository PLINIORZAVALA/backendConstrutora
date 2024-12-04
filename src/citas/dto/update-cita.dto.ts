import { IsString, IsEmail, IsOptional, IsDateString, IsPhoneNumber } from 'class-validator';

export class UpdateCitaDto {
  @IsString()
  @IsOptional()
  nombre?: string; // Nombre de la persona, opcional

  @IsString()
  @IsOptional()
  apellido?: string; // Apellido de la persona, opcional

  @IsEmail()
  @IsOptional()
  email?: string; // Correo electrónico de la persona, opcional

  @IsPhoneNumber(null, { message: 'Número de teléfono no válido' })
  @IsOptional()
  telefono?: string; // Teléfono de contacto, opcional

  @IsDateString()
  @IsOptional()
  fecha?: Date; // Nueva fecha y hora para la cita, opcional

  @IsString()
  @IsOptional()
  motivo?: string; // Motivo de la cita, opcional

  @IsString()
  @IsOptional()
  estado?: string; // Nuevo estado de la cita (pendiente, confirmada, cancelada)
}
