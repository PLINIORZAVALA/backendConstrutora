import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;


  @IsString()
  @IsOptional()
  @IsIn(['admin', 'SuperAdmin'])
  role: string;

   // Ejemplo de validación con expresión regular para el password
   @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, {
    message: 'La contraseña debe contener al menos 6 caracteres, una letra y un número.',
  })
  passwordValidation: string;
}
