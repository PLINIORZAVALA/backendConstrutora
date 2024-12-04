import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entity/citas.entity'; // Asegúrate de importar la entidad Cita

@Module({
  imports: [TypeOrmModule.forFeature([Cita])],  // Asegúrate de que TypeOrmModule esté configurado correctamente
  providers: [CitasService],
  controllers: [CitasController],
})
export class CitasModule {}
