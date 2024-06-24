import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Estado from 'src/Common/Entities/Estado.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Estado], 'des')],
  providers: [EstadosService],
  controllers: [EstadosController],
  exports:[EstadosService]
})
export class EstadosModule {}
