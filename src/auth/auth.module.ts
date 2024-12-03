import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/user.module';
// Elimina la importación de JwtModule porque no lo necesitas por ahora
// import { JwtModule } from '@nestjs/jwt'; 

@Module({
  imports: [
    UserModule,
    // JwtModule ya no es necesario
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,  // Usamos la variable de entorno
    //   signOptions: { expiresIn: '60s' },  // Puedes ajustar el tiempo de expiración
    // }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
