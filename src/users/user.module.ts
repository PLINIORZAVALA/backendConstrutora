// src/users/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Conecta la entidad User con TypeORM
  providers: [UserService],
  exports: [UserService],  // Exporta el servicio para usarlo en otros módulos
  controllers: [UserController],  // Controlador para gestionar las solicitudes HTTP
})
export class UserModule {}
