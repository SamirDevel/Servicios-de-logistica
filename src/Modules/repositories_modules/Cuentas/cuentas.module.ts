import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cuenta from '../../../Common/Entities/Cuenta.entity';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Cuenta], 'des')],
    providers: [CuentasService],
    exports:[CuentasService],
    controllers: [CuentasController]
})
export class CuentasModule { }
