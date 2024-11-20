import { Module } from '@nestjs/common';
import { CatalogosController } from './catalogos.controller';
import { CatalogosService } from './catalogos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { ImagenCatalogo } from './entities/catalogoImg.entity';  // Importa también la entidad ImagenCatalogo

@Module({
  imports: [
    TypeOrmModule.forFeature([Catalogo, ImagenCatalogo]), // Asegúrate de incluir ambos repositorios
  ],
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
