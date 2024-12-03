// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // Se puede eliminar si no se usa JWT
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/user.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { User } from 'src/users/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    // El JwtService ya no es necesario, puedes eliminar esta línea
    // private readonly jwtService: JwtService,
  ) {}

  // Método para validar al usuario
  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const { username, password } = loginDto;

    // Buscar el usuario por nombre de usuario
    const user = await this.userService.findByUsername(username);

    if (!user) {
      console.log('Usuario no encontrado:', username);  // Log si no se encuentra el usuario
      return null; // Si no encuentra el usuario, retorna null
    }

    // Compara las contraseñas de forma segura
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log('Contraseña válida para el usuario:', username);  // Log si la contraseña es válida
      return user; // Si la contraseña es correcta, retorna el usuario
    }

    console.log('Contraseña incorrecta para el usuario:', username);  // Log si la contraseña es incorrecta
    return null; // Si la contraseña no es válida, retorna null
  }

  // Método para hacer login (sin generar el JWT)
  async login(loginDto: LoginDto): Promise<{ message: string }> {
    const user = await this.validateUser(loginDto);

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas'); // Lanza un error de autorización si no se encuentra el usuario o las credenciales son incorrectas
    }

    // En vez de generar el token, simplemente retornamos un mensaje
    return {
      message: 'Inicio de sesión exitoso', // Mensaje de éxito
    };
  }
}
