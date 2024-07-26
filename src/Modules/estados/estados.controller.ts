import { Controller } from '@nestjs/common';
import Estado from '../../Common/Entities/Estado.entity';
import CRUD from '../../Common/Interfaces/CRUD.interface';
import Result from 'src/Common/Utilities/Tools/Classes/Result';
import BooleanExpression from 'src/Common/Interfaces/BooleanInterfaces.interface';

@Controller('estados')
export class EstadosController implements CRUD<Estado> {
    create: (data: any, extras?: any)=>Promise<Result<any>>;

    read: (filters: BooleanExpression<any>[]) => Promise<Result<any>>;

    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
