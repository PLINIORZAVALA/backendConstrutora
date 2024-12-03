import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,  // Asegúrate de que el nombre sea 'userRepository'
  ) {}

  // Método para crear un usuario
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Validación del nombre de usuario
    if (!createUserDto.username || createUserDto.username.trim().length === 0) {
      throw new BadRequestException('El nombre de usuario no puede estar vacío.');
    }

    // Validación de que el nombre de usuario solo contiene caracteres permitidos (letras, números, guiones bajos)
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(createUserDto.username)) {
      throw new BadRequestException('El nombre de usuario solo puede contener letras, números y guiones bajos.');
    }

    // Validación de que el nombre de usuario es único
    const existingUser = await this.userRepository.findOne({ where: { username: createUserDto.username } });
    if (existingUser) {
      throw new BadRequestException('El nombre de usuario ya está en uso.');
    }

    // Validación de la contraseña (al menos 6 caracteres)
    if (createUserDto.password.length < 6) {
      throw new BadRequestException('La contraseña debe tener al menos 6 caracteres.');
    }

    // Validación de rol
    const validRoles = ['admin', 'superadmin'];
    if (!validRoles.includes(createUserDto.role)) {
      throw new BadRequestException('El rol debe ser uno de los siguientes: admin, superadmin.');
    }

    // Cifrar la contraseña
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,  // Guardar la contraseña cifrada
    });

    return this.userRepository.save(user);
  }

  // Método para buscar un usuario por nombre de usuario
  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }
}
