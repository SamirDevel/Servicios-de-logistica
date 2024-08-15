import { IsNotEmpty, IsString } from "class-validator";
import { createDto } from "../conceptos.service";

export default class CreateConceptoDTO implements createDto{
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;
}