import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';

@Module({
  providers: [EstadosService]
})
export class EstadosModule {}
