import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Presupuesto from 'src/Common/Entities/Presupuesto.entity';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import { MainResult } from 'src/Common/types/Errors.types';
import { MainObject } from 'src/Common/types/Keys.types';
import { Repository } from 'typeorm';
import { ConceptosService } from '../conceptos/conceptos.service';

type dto = MainObject<Omit<Presupuesto, 'ruta'>>
@Injectable()
export class PresupuestosService implements Partial<CRUD<Presupuesto>>{
    constructor(
        @InjectRepository(Presupuesto, 'des') private repo:Repository<Presupuesto>,
    ) { }

    async create(data:dto):Promise<MainResult<Presupuesto>>{
        return this.repo.create(data)
    }
}
