import { IsString, IsEmail, IsOptional, IsDateString, IsPhoneNumber } from 'class-validator';

export class CreateCitaDto {
  @IsString()
  nombre: string; // Nombre de la persona solicitando la cita

  @IsString()
  apellido: string; // Apellido de la persona solicitando la cita

  @IsEmail()
  email: string; // Correo electrónico de la persona

  @IsPhoneNumber(null, { message: 'Número de teléfono no válido' })
  @IsOptional()
  telefono: string; // Teléfono de la persona, opcional

  @IsDateString()
  fecha: Date; // Fecha y hora de la cita

  @IsString()
  @IsOptional()
  motivo: string; // Motivo de la cita, opcional

  @IsString()
  @IsOptional()
  estado: string; // Estado de la cita (pendiente, confirmada, cancelada)
}
