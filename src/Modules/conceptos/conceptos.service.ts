import { Injectable } from '@nestjs/common';
import CRUD from '../../Common/Interfaces/CRUD.interface';
import RepositoryService from '../../Common/Utilities/Tools/Classes/RepositoryService';
import Result from '../../Common/Utilities/Tools/Classes/Result';
import Concepto from '../../Common/Entities/Des/Concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fns } from '../../Common/Utilities/Tools/Functions';
import BooleanExpression from '../../Common/Interfaces/BooleanInterfaces.interface';

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
export class ConceptosService implements CRUD {
    private readonly serviceRepository:RepositoryService<Concepto>
    constructor(
        @InjectRepository(Concepto, 'des') repositoryConcepto:Repository<Concepto>
    ){ 
        this.serviceRepository = new RepositoryService(repositoryConcepto, 'ConceptoService')
    }

    async create(data: createDto): Promise<Result<Concepto>>{
        return fns.isSucces(await this.serviceRepository.create(data), 'El concepto no ha podido ser creado')
    }
    async read(values: Partial<readDto>):Promise<Result<Concepto[]>>{
        const filters:BooleanExpression<Concepto>[] =[
            {variable:'id', operator:'=', value:values.id, alias:'idConcepto'},
            {variable:'nombre', operator:'=', value:values.nombre, alias:'nombreConcepto'},
            {variable:'descripcion', operator:'=', value:values.descripcion, alias:'descripcionConcepto'}
        ]  
        return fns.isSucces(await this.serviceRepository.read(filters, ['nombre', 'descripcion']), 'El conceptoo se han podido leer los esatos.')
    }
    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
