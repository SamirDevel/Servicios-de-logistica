import { IsString } from "class-validator";
import Cuenta from "src/Common/Entities/Cuenta.entity";

export default class CrearUsuarioDTO implements Partial<Cuenta>{
    @IsString()
    nombre:string

    @IsString()
    usuario:string

    @IsString()
    contraseña:string
}