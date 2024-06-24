import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Chofer from 'src/Common/Entities/Chofer.entity';
import MainError from 'src/Common/Interfaces/Error.interface';
import RepositoryController from 'src/Common/Utilities/Tools/Classes/RepositoryController';
import { ChoferesService } from './choferes.service';
import CreateChoferDTO from './DTOs/CreateChofer.dto';
import ReadChoferDTO from './DTOs/ReadChofer.dto';

@Controller('choferes')
export class ChoferesController extends RepositoryController<Chofer> {
    constructor(
        protected mainService:ChoferesService
    ){
        super('Choferes')
    }

    @Post('')
    async create(@Body() data: CreateChoferDTO): Promise<string | MainError> {
        return await this.executeSQL(
            async ()=> await this.mainService.create(data),
            'Ha habido un error al crear el chofer nuevo'
        )
    }

    @Get('')
    async read(@Query() filters: ReadChoferDTO): Promise<MainError | Chofer[]> {
        return await this.executeSQL(
            async ()=> await this.mainService.read(
                filters,[
                    'nombre',
                    'codigo',
                    'licencia',
                    'vigencia'
                ]),
                `No se han podido obtener los choferes`
        )
    }
    update: (id: number, data: Partial<Chofer>)=>Promise<string | MainError>;
}
