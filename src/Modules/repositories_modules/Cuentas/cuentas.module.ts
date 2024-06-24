import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cuenta from '../../../Common/Entities/Cuenta.entity';
import { CuentasService } from './cuentas.service';

@Module({
    imports:[TypeOrmModule.forFeature([Cuenta], 'des')],
    providers: [CuentasService],
    exports:[CuentasService]
})
export class CuentasModule { }
