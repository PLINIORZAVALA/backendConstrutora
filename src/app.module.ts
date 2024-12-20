import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CatalogosModule } from './catalogos/catalogos.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ImgCatalogoModule } from './img-catalogo/img-catalogo.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // Asegúrate de que el usuario y la contraseña sean correctos
      password: '',      // Si tienes una contraseña, colócala aquí
      database: 'constructora',  // Asegúrate de que esta base de datos exista
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Evitar en producción, en desarrollo puedes usar true si quieres que la base se sincronice automáticamente
    }),
    CatalogosModule,  
    UserModule, AuthModule, ImgCatalogoModule, CitasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
