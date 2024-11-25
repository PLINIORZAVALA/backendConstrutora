import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CatalogosModule } from './catalogos/catalogos.module';
import { CitasModule } from './catalogos/modulos/citas/citas.module';
import { UsuariosModule } from './catalogos/modulos/usuarios/usuarios.module';
import { ImgCatalogoModule } from './catalogos/modulos/img_catalogo/img_catalogo.module';
import { ModificacionesModule } from './catalogos/modulos/modificaciones/modificaciones.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',  // Asegúrate de que el usuario y la contraseña sean correctos
      password: '',      // Si tienes una contraseña, colócala aquí
      database: 'db_constructora',  // Asegúrate de que esta base de datos exista
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Evitar en producción, en desarrollo puedes usar true si quieres que la base se sincronice automáticamente
    }),
    CatalogosModule,
    CitasModule,
    UsuariosModule,
    ImgCatalogoModule,
    ModificacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
