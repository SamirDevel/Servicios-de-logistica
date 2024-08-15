import { Module } from '@nestjs/common';
import { ChoferesController } from './choferes.controller';
import { ChoferesService } from './choferes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entidadesList from '../../Common/Entities/Des';
import { EstadosModule } from '../estados/estados.module';

@Module({
  imports:[
    TypeOrmModule.forFeature(entidadesList, 'des'),
    EstadosModule
  ],
  controllers: [ChoferesController],
  providers: [ChoferesService]
})
export class ChoferesModule {}
