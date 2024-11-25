import { Test, TestingModule } from '@nestjs/testing';
import { ModificacionesController } from './modificaciones.controller';
import { ModificacionesService } from './modificaciones.service';

describe('ModificacionesController', () => {
  let controller: ModificacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModificacionesController],
      providers: [ModificacionesService],
    }).compile();

    controller = module.get<ModificacionesController>(ModificacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
