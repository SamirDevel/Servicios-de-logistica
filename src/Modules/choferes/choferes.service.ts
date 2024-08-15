import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Chofer from '../../Common/Entities/Des/Chofer.entity';
import CRUD from '../../Common/Interfaces/CRUD.interface';
import RepositoryService from '../../Common/Utilities/Tools/Classes/RepositoryService';
import Result from '../../Common/Utilities/Tools/Classes/Result';
import { fns } from '../../Common/Utilities/Tools/Functions';
import { Repository } from 'typeorm';
import { EstadosService } from '../estados/estados.service';

export interface createDto{
    codigo:string
    vigencia:Date
}
@Injectable()
export class ChoferesService implements CRUD{
    private readonly serviceRepository:RepositoryService<Chofer>
    constructor(
        @InjectRepository(Chofer, 'des') repositoryChofer:Repository<Chofer>,
        private readonly serviceEstados:EstadosService
    ) { 
        this.serviceRepository = new RepositoryService(repositoryChofer, 'ChoferesService')
    }
    async create(data: createDto):Promise<Result<any>>{
        const result = (await this.serviceEstados.read({nombre:'ACTIVO'}));
        if(!result.isSuccess)return Result.Failure('Se necesita un estado ACTIVO en la base de datos');
        else{
            const estado = result.value[0]
            return fns.isSucces(await this.serviceRepository.create({...data, estado}), 'No se ha podido crear el chofer')
        }
    }
    read: (filters: any, extras?: any) => Promise<Result<any>>;
    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
