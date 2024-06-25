import { Module } from '@nestjs/common';
import { ConceptosService } from './conceptos.service';
import { ConceptosController } from './conceptos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Concepto from 'src/Common/Entities/Concepto.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Concepto], 'des')],
  providers: [ConceptosService],
  controllers: [ConceptosController],
  exports:[ConceptosService]
})
export class ConceptosModule {}
