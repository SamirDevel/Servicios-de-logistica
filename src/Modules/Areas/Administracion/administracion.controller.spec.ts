import { Test, TestingModule } from '@nestjs/testing';
import { AdministracionController } from './administracion.controller';

describe('AdministracionController', () => {
  let controller: AdministracionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministracionController],
    }).compile();

    controller = module.get<AdministracionController>(AdministracionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
