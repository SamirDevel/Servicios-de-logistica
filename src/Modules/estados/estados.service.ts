import { Injectable } from '@nestjs/common';
import Estado from '../../Common/Entities/Estado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadosService {
    constructor(
        @InjectRepository(Estado, 'des') private repositoryEstado:Repository<Estado>
    ){ }
}
