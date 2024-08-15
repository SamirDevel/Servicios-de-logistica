import { Module } from '@nestjs/common';
import { ConceptosController } from './conceptos.controller';
import { ConceptosService } from './conceptos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entidadesList from '../../Common/Entities/Des';

@Module({
  imports:[
    TypeOrmModule.forFeature(entidadesList, 'des')
  ],
  controllers: [ConceptosController],
  providers: [ConceptosService],
  exports:[ConceptosService]
})
export class ConceptosModule {}
