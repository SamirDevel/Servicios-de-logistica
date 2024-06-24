import { Inject, Injectable } from '@nestjs/common';
import { CuentasService } from '../../../Modules/repositories_modules/Cuentas/cuentas.service';
import CrearUsuarioDTO from './DTOs/CrearUsuario.dto';
import GetUsuariosDTO from './DTOs/GetUsuarios.dto';
import { ErrorsService } from '../errors/errors.service';
import AreaService from 'src/Common/Utilities/Tools/Classes/AreaService';

@Injectable()
export class AdministracionService extends AreaService {
    constructor(
        private readonly serviceCuentas:CuentasService,
    ){
        super('administracion')
    }
    
    async createUser(usuario:CrearUsuarioDTO){
        return await this.executeSQL(async ()=>await this.serviceCuentas.create(usuario), 'Ocurrio un error al crear el usuario')
    }

    async getUsers(filters:GetUsuariosDTO){
        return await this.executeSQL(async ()=>{
            return await this.serviceCuentas.read(filters, [
                'nombre',
                'usuario',
                'contraseña'
            ])
        }, 'No se han podido leer los usuarios')
    }
}
