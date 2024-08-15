import { Injectable } from '@nestjs/common';
import DBFFile, { DELETED } from 'dbffile';
import Cliente from 'src/Common/Entities/DBF/Clientes.entity';
import DBFRepository from 'src/Common/Utilities/Tools/Classes/DBF/DBFRepository';

@Injectable()
export class DbfService {
    private repositoryDbf:DBFRepository<Cliente>
    constructor(
        
    ) { 
        this.repositoryDbf = new DBFRepository(Cliente)
    }
    
    async read(){
        return await this.repositoryDbf.read()
    }
}