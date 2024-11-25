import { Test, TestingModule } from '@nestjs/testing';
import { ModificacionesService } from './modificaciones.service';

describe('ModificacionesService', () => {
  let service: ModificacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModificacionesService],
    }).compile();

    service = module.get<ModificacionesService>(ModificacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
