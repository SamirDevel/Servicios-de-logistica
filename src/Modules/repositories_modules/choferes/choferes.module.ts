import { Module } from '@nestjs/common';
import { ChoferesController } from './choferes.controller';
import { ChoferesService } from './choferes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Chofer from 'src/Common/Entities/Chofer.entity';
import { EstadosModule } from '../estados/estados.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Chofer], 'des'),
    EstadosModule
  ],
  controllers: [ChoferesController],
  providers: [ChoferesService],
  exports: [ChoferesService]
})
export class ChoferesModule {}
