import { Controller, Get, Post } from '@nestjs/common';
import CRUD from '../../Common/Interfaces/CRUD.interface';
import Result from '../..//Common/Utilities/Tools/Classes/Result';
import { ChoferesService } from './choferes.service';

@Controller('choferes')
export class ChoferesController implements CRUD{
    constructor(
        private serviceChoferes:ChoferesService
    ){ }
    //@Post()
    create: (data: any, extras?: any)=>Promise<Result<any>>;
    
    //@Get()
    read: (filters: any, extras?: any) => Promise<Result<any>>;
    update: (id: number, data: any, extras?: any) => Promise<Result<any>>;
}
