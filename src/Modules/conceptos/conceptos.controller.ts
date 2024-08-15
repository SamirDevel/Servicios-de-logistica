import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import Result from 'src/Common/Utilities/Tools/Classes/Result';
import { ConceptosService } from './conceptos.service';
import CreateConceptoDTO from './DTOs/Create.dto';
import ReadConceptoDTO from './DTOs/Read.dto';

@Controller('conceptos')
export class ConceptosController implements CRUD{
    constructor(
        private serviceEstado:ConceptosService
    ){ }

    @Post()
    async create(@Body() data: CreateConceptoDTO): Promise<Result<any>>{
        return await this.serviceEstado.create(data)
    }
    @Get()
    async read(@Query() filters: ReadConceptoDTO):Promise<Result<any>>{
        return await this.serviceEstado.read(filters)
    }
    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
