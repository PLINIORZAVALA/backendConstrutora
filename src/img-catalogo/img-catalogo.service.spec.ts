import { Test, TestingModule } from '@nestjs/testing';
import { ImgCatalogoService } from './img-catalogo.service';

describe('ImgCatalogoService', () => {
  let service: ImgCatalogoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImgCatalogoService],
    }).compile();

    service = module.get<ImgCatalogoService>(ImgCatalogoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
