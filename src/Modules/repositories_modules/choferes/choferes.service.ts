import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Chofer from 'src/Common/Entities/Chofer.entity';
import { BooleanExpression } from 'src/Common/Interfaces/BooleanInterfaces.interface';
import RepositoryService from 'src/Common/Utilities/Tools/Classes/RepositoryService';
import { MainKeys, MainObject } from 'src/Common/types/Keys.types';
import { Repository } from 'typeorm';
import { EstadosService } from '../estados/estados.service';

type dto = Omit<MainObject<Chofer>, 'rutas'|'estado'>

@Injectable()
export class ChoferesService extends RepositoryService<Chofer> {
    constructor(
        @InjectRepository(Chofer, 'des') repoBase:Repository<Chofer>,
        private serviceEstado:EstadosService
    ){
        const options:BooleanExpression<Chofer>[] = [
            {variable:'nombre', operator:'=', alias:'nombreChofer'},
            {variable:'codigo', operator:'=', alias:'codigoChofer'},
            {variable:'id', operator:'=', alias:'idChofer'}
        ]
        super(repoBase, 'Cho', options)
    }

    async create(data: dto): Promise<string> {
        const estado = (this.serviceEstado.read({nombre:'ACTIVO'}, ['nombre']))[0]
        return await this.repo.create({
            ...data, 
            estado
        }, 'Chofer creado exitosamente');
    }

    async read(filters: Partial<Chofer>, columns: MainKeys<Chofer>[]): Promise<Chofer[]> {
        return await this.repo.read(filters,columns)
    }

    update: (id: number, data: Partial<Chofer>)=> Promise<string>;
}
