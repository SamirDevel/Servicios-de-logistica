import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Concepto from 'src/Common/Entities/Concepto.entity';
import RepositoryService from 'src/Common/Utilities/Tools/Classes/RepositoryService';
import { ConceptosService } from './conceptos.service';
import RepositoryController from 'src/Common/Utilities/Tools/Classes/RepositoryController';
import MainError from 'src/Common/Interfaces/Error.interface';
import { MainObject } from 'src/Common/types/Keys.types';
import ReadConceptoDTO from './DTOs/ReadConceptoDTO';
import CreateConceptoDTO from './DTOs/CreateConceptoDTO';

@Controller('conceptos')
export class ConceptosController extends RepositoryController<Concepto>{
    constructor(
        protected mainService:ConceptosService
    ){
        super('Conceptos')
    }

    @Post('')
    async create(@Body() data: CreateConceptoDTO): Promise<string | MainError> {
        return await this.executeSQL(
            async ()=>await this.mainService.create(data),
            'No se ha podido crear el concepto, verifique los datos'
        )
    }

    @Get('')
    async read(@Query() filters: ReadConceptoDTO): Promise<MainError | Concepto[]> {
        return await this.executeSQL(
            async ()=>this.mainService.read(filters, [
                'nombre',
                'descripcion'
            ]),'No se han podido leer los conceptos, por favor intentelo de nuevo'
        )
    }

    update: (id: number, data: Partial<Concepto>)=>Promise<string | MainError>;
}
