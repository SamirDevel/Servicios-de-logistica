import { IsNumberString, IsOptional, IsString } from "class-validator";
import Cuenta from "src/Common/Entities/Cuenta.entity";

export default class GetUsuariosDTO implements Partial<Cuenta>{
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsNumberString()
    id: number;
}