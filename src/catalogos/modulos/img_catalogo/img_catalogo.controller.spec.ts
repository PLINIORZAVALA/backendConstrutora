import { Test, TestingModule } from '@nestjs/testing';
import { ImgCatalogoController } from './img_catalogo.controller';
import { ImgCatalogoService } from './img_catalogo.service';

describe('ImgCatalogoController', () => {
  let controller: ImgCatalogoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImgCatalogoController],
      providers: [ImgCatalogoService],
    }).compile();

    controller = module.get<ImgCatalogoController>(ImgCatalogoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
