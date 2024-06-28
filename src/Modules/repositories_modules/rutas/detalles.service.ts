import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DetalleRuta from 'src/Common/Entities/Detalle.entity';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import { MainObject } from 'src/Common/types/Keys.types';
import { Repository } from 'typeorm';

type dto = Omit<MainObject<DetalleRuta>, 'entrega'>
@Injectable()
export class DetallesService implements Partial<CRUD<DetalleRuta>> {
    constructor(
        @InjectRepository(DetalleRuta, 'des') private repo:Repository<DetalleRuta>
    ){
        //super(repoBase, 'DetRut', []);
    }

    async create(data:dto): Promise<DetalleRuta>{
        return this.repo.create(data)
    }
}
