import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Estado from '../../Common/Entities/Des/Estado.entity';
import CRUD from '../../Common/Interfaces/CRUD.interface';
import Result from 'src/Common/Utilities/Tools/Classes/Result';
import BooleanExpression from 'src/Common/Interfaces/BooleanInterfaces.interface';
import { EstadosService } from './estados.service';
import CreateEstadoDTO from './DTOs/Create.dto';
import ReadEstadoDto from './DTOs/Read.dto';

@Controller('estados')
export class EstadosController implements CRUD {
    constructor(
        private serviceEstado:EstadosService
    ){ }

    @Post()
    async create(@Body() data: CreateEstadoDTO):Promise<Result<Estado>>{
        return await this.serviceEstado.create(data)
    }

    @Get()
    async read(@Query() filters: ReadEstadoDto):Promise<Result<Estado[]>>{
        return await this.serviceEstado.read(filters)
    }

    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
