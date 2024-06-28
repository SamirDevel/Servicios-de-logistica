import { Injectable } from '@nestjs/common';
import Entrega from 'src/Common/Entities/Entrega.entity';
import { DetallesService } from './detalles.service';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import { MainObject } from 'src/Common/types/Keys.types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

type dto = MainObject<Omit<Entrega, 'ruta'>>
@Injectable()
export class EntregasService implements Partial<CRUD<Entrega>> {
    constructor(
        private serviceDetalle:DetallesService,
        @InjectRepository(Entrega, 'des') private repo:Repository<Entrega>
    )
    { }

    async create(data: dto):Promise<Entrega>{
        const detalles = data.detalles;
        const creados = new Array()
        for(const i in detalles){
            const detalle = detalles[i];
            creados.push(this.serviceDetalle.create(detalle));
        }
        const entrega = this.repo.create({
            ...data,
            detalles:creados
        })
        return entrega;
    }
    
}
