import { Injectable } from '@nestjs/common';
import Estado from "src/Common/Entities/Estado.entity";
import RepositoryService from "../../../Common/Utilities/Tools/Classes/RepositoryService";
import { Repository } from "typeorm";
import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import { MainKeys, MainObject } from "src/Common/types/Keys.types";
import { InjectRepository } from '@nestjs/typeorm';

type dto = Omit<MainObject<Estado>, 'rutas'|'choferes'>
@Injectable()
export class EstadosService extends RepositoryService<Estado>{
    constructor(
        @InjectRepository(Estado, 'des') repoBase:Repository<Estado>,
    ){
        const options:BooleanExpression<Estado>[] = [
            {variable:'nombre', operator:'=', alias:'nombreEst'},
            {variable:'descripcion', operator:'=', alias:'usuarioEst'},
            {variable:'id', operator:'=', alias:'idEst'}
        ]
        super(repoBase, 'Est', options)
    }
    async create(data: dto): Promise<string> {
        return await this.repo.create(data, 'Estado creado con éxito')
    } 
    async read(filters: Partial<Estado>, columns: MainKeys<Estado>[]): Promise<Estado[]> {
        return await this.repo.read(filters, columns)
    }
    update: (id: number, data: Partial<Estado>) => Promise<string>;
}