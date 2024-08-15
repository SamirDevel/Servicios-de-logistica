import { Controller, Get } from '@nestjs/common';
import CRUD from 'src/Common/Interfaces/CRUD.interface';
import Result from 'src/Common/Utilities/Tools/Classes/Result';
import { DbfService } from './dbf.service';

@Controller('dbf')
export class DbfController implements Partial<CRUD>{
    constructor (
        private serviceDBF:DbfService
    ) { }
    @Get()
    async read(filters: any):Promise<any>{
        //C:/Users/spriego/Desktop/PEDIDOD.dbf -> detalles de pedidos
        //C:/Users/spriego/Desktop/pedidoc.dbf -> datos del pedido
        //C:/Users/spriego/Desktop/clientes.dbf -> datos del ciente
        return await this.serviceDBF.read()
    }
}
