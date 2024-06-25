import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Concepto from 'src/Common/Entities/Concepto.entity';
import { BooleanExpression } from 'src/Common/Interfaces/BooleanInterfaces.interface';
import RepositoryService from 'src/Common/Utilities/Tools/Classes/RepositoryService';
import { MainKeys, MainObject } from 'src/Common/types/Keys.types';
import { Repository } from 'typeorm';

type dto = Omit<MainObject<Concepto>, 'viaticos'|'presupuestos'>

@Injectable()
export class ConceptosService extends RepositoryService<Concepto>{
    constructor(
        @InjectRepository(Concepto, 'des') repoBase:Repository<Concepto>
    ){
        const options:BooleanExpression<Concepto>[] = [
            {variable:'nombre', operator:'=', alias:'nombreCncepto'},
            {variable:'descripcion', operator:'=', alias:'descConcepto'},
            {variable:'id', operator:'=', alias: 'idCon'}
        ]
        super(repoBase,'Conceptos', options)
    }
    async create(data:dto): Promise<string | Concepto> {
        return await this.repo.create(data, 'Concepto creado con exito')
    }
    async read(filters: Partial<Concepto>, columns: (MainKeys<Concepto>)[]): Promise<Concepto[]> {
        return await this.repo.read(filters, columns)
    }
    update: (id: number, data: Partial<Concepto>)=>Promise<string>;
}
