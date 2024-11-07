// src/catalogos/catalogos.module.ts
import { Module } from '@nestjs/common';
import { CatalogosController } from './catalogos.controller';  // Asegúrate de que esta importación esté correcta
import { CatalogosService } from './catalogos.service';        // Asegúrate de que esta importación esté correcta

@Module({
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
