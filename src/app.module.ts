import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogosModule } from './catalogos/catalogos.module';
import { CitasModule } from './citas/citas.module';
import { ProyectosModule } from './proyectos/proyectos.module';

@Module({
  imports: [CatalogosModule, CitasModule, ProyectosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
