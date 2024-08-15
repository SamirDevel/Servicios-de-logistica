import { IsNotEmpty, IsString } from "class-validator";
import { createDto } from "../estados.service";

export default class CreateEstadoDTO implements createDto{
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}