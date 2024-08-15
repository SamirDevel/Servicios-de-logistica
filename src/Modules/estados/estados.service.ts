import { Injectable } from '@nestjs/common';
import Estado from '../../Common/Entities/Des/Estado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import RepositoryService from '../../Common/Utilities/Tools/Classes/RepositoryService';
import Result from 'src/Common/Utilities/Tools/Classes/Result';
import { MainKeys } from 'src/Common/types/Keys.types';
import BooleanExpression from 'src/Common/Interfaces/BooleanInterfaces.interface';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import { fns } from 'src/Common/Utilities/Tools/Functions';

export interface createDto {
    nombre:string
    descripcion:string
}
export interface readDto{
    id:number,
    nombre:string,
    descripcion:string,
}
@Injectable()
export class EstadosService implements CRUD{
    private readonly serviceRepository:RepositoryService<Estado>
    constructor(
        @InjectRepository(Estado, 'des') repositoryEstado:Repository<Estado>
    ){ 
        this.serviceRepository = new RepositoryService(repositoryEstado, 'EstadoService')
    }

    async create(data: createDto): Promise<Result<Estado>>{
        return fns.isSucces(await this.serviceRepository.create(data), 'El estado no ha podido ser creado.')
    }

    async read(values:Partial<readDto>):Promise<Result<Estado[]>>{
        const filters:BooleanExpression<Estado>[] =[
            {variable:'id', operator:'=', value:values.id, alias:'idEstado'},
            {variable:'nombre', operator:'=', value:values.nombre, alias:'nombreEstado'},
            {variable:'descripcion', operator:'=', value:values.descripcion, alias:'descripcionEstado'}
        ]  
        return fns.isSucces(await this.serviceRepository.read(filters, ['nombre', 'descripcion']), 'El estado no se han podido leer los esatos.')
    }
    update: <J>(id: number, data: any, extras?: any)=> Promise<Result<Estado>> | Promise<Result<J>>;
}
