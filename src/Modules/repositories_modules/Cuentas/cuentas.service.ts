import RepositoryService from "../../../Common/Utilities/Tools/Classes/RepositoryService";
import Cuenta from "../../../Common/Entities/Cuenta.entity";
import { Repository } from "typeorm";
import { MainKeys, MainObject } from "../../../Common/types/Keys.types";
import CRUD from "../../../Common/Interfaces/CRUD.interface";
import { BooleanExpression } from "../../../Common/Interfaces/BooleanInterfaces.interface";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CuentasService extends RepositoryService<Cuenta> implements CRUD<Cuenta>{
    constructor(
       @InjectRepository(Cuenta, 'des') repoBase:Repository<Cuenta>,
    ){
        const options:BooleanExpression<Cuenta>[] = [
            {variable:'nombre', operator:'=', alias:'nombreCue'},
            {variable:'usuario', operator:'=', alias:'usuarioCue'},
            {variable:'id', operator:'=', alias:'idCue'},
            {variable:'contraseña', operator:'=', alias:'pswCue'}
        ]
        super(repoBase, 'Cue', options)
        
    }
    async create(data: MainObject<Cuenta>): Promise<string> {
        return await this.repo.create(data, 'Usuario creado con exio')
    }
    async read(filters: Partial<Cuenta>, columns: MainKeys<Cuenta>[]):Promise<Cuenta[]>{
        return await this.repo.read(filters, columns)
    }
    update: (id: number, data: Partial<Cuenta>)=> Promise<string>
}