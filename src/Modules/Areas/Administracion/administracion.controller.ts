import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AdministracionService } from './administracion.service';
import CrearUsuarioDTO from './DTOs/CrearUsuario.dto';
import GetUsuariosDTO from './DTOs/GetUsuarios.dto';

@Controller('administracion')
export class AdministracionController {
    constructor(
        private serviceAdmin:AdministracionService
    ){

    }
    @Post('usuarios')
    async createUser(@Body() body:CrearUsuarioDTO){
        return await this.serviceAdmin.createUser(body)
    }

    @Get('usuarios')
    async getUsers(@Query() query:GetUsuariosDTO){
        return await  this.serviceAdmin.getUsers(query)
    }
}
