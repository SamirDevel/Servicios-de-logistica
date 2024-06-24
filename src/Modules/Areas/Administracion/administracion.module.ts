import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministracionController } from './administracion.controller';
import { AdministracionService } from './administracion.service';
import entidadesList from '../../../Common/Entities';
import { CuentasModule } from '../../../Modules/repositories_modules/cuentas/cuentas.module';
import { CuentasService } from 'src/Modules/repositories_modules/Cuentas/cuentas.service';

@Module({
  imports:[
    CuentasModule,
    TypeOrmModule.forFeature([...entidadesList], 'des'),
  ],
  controllers: [AdministracionController],
  providers:[AdministracionService, CuentasService],
})
export class AdministracionModule {}
