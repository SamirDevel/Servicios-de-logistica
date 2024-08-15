import { Module } from '@nestjs/common';
import { EstadosController } from './estados.controller';
import { EstadosService } from './estados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entidadesList from '../../Common/Entities/Des';

@Module({
  imports:[
    TypeOrmModule.forFeature(entidadesList, 'des')
  ],
  controllers: [EstadosController],
  providers: [EstadosService],
  exports:[EstadosService]
})
export class EstadosModule {}
