import { Module } from '@nestjs/common';
import { CatalogosController } from './catalogos.controller';
import { CatalogosService } from './catalogos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogo } from './entities/catalogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogo])], // Asegúrate de importar el repositorio
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
