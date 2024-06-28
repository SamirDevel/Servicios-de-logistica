import { Module } from '@nestjs/common';
import { RutasController } from './rutas.controller';
import { RutasService } from './rutas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallesService } from './detalles.service';
import { EntregasService } from './entregas.service';
import { PresupuestosService } from './presupuestos.service';
import entidadesList from 'src/Common/Entities';
import { EstadosModule } from '../estados/estados.module';
import { ConceptosModule } from '../conceptos/conceptos.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[
    TypeOrmModule.forFeature([...entidadesList], 'des'),
    EstadosModule,
    ConceptosModule,
    MulterModule.register({
      dest:'./images',
    })
  ],
  controllers: [RutasController],
  providers: [
    RutasService, 
    DetallesService, 
    EntregasService, 
    PresupuestosService
  ],
  exports:[RutasService]
})
export class RutasModule {}
