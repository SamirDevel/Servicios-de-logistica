import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import Estado from 'src/Common/Entities/Estado.entity';
import RepositorController from 'src/Common/Utilities/Tools/Classes/RepositoryController';
import { EstadosService } from './estados.service';
import MainError from 'src/Common/Interfaces/Error.interface';
import { MainKeys, MainObject } from 'src/Common/types/Keys.types';
import CreateEstadoDTO from './DTOs/CreateEstado.dto';
import ReadEstadoDTO from './DTOs/ReadEstado.dto';

@Controller('estados')
export class EstadosController extends RepositorController<Estado>{
    constructor(
        protected mainService:EstadosService
    ){
        super('Estados')
    }
    @Post('')
    async create(@Body() data:CreateEstadoDTO): Promise<string | MainError> {
        return await this.executeSQL(
            async ()=> await this.mainService.create(data)
            ,`Ha abido un error al crear el estado`
        )
    }

    @Get('')
    async read(@Query() filters:ReadEstadoDTO): Promise<MainError | Estado[]> {
        return await this.executeSQL(
            async ()=> this.mainService.read(
                filters,[
                    'nombre',
                    'descripcion'
                ]
            ),'No se han pidido obtener las rutas'
        )
    }
    update:(id: number, data: Partial<Estado>)=>Promise<string | MainError>;
}
