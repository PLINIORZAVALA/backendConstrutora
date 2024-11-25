import { Module } from '@nestjs/common';
import { ModificacionesService } from './modificaciones.service';
import { ModificacionesController } from './modificaciones.controller';

@Module({
  controllers: [ModificacionesController],
  providers: [ModificacionesService],
})
export class ModificacionesModule {}
