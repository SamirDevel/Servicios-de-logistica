import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import CrearUsuarioDTO from './DTOs/CrearUsuario.dto';
import GetUsuariosDTO from './DTOs/GetUsuarios.dto';
import RepositorController from '../../../Common/Utilities/Tools/Classes/RepositoryController';
import Cuenta from '../../../Common/Entities/Cuenta.entity';
import MainError from '../../../Common/Interfaces/Error.interface';

@Controller('cuentas')
export class CuentasController extends RepositorController<Cuenta> {
    constructor(
        protected mainService: CuentasService
    ){
        super('Cuentas')
    }
    @Post('')
    async create(@Body() body: CrearUsuarioDTO):Promise<string|MainError>{
        return await this.executeSQL(
            async ()=>await this.mainService.create(body)
            , 'Ocurrio un error al crear el usuario'
        )
    }

    @Get('')
    async read(@Query() query:GetUsuariosDTO):Promise<MainError|Cuenta[]>{
        return await this.executeSQL(async ()=>{
            return await this.mainService.read(query, [
                'nombre',
                'usuario',
                'contraseña'
            ])
        }, 'No se han podido leer los usuarios')
    }

    update: (id: number, data: Partial<Cuenta>) => Promise<string|MainError>;
}
