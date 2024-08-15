import { IsNumberString, IsOptional, IsString } from "class-validator";
import { readDto } from "../conceptos.service";

export default class ReadConceptoDTO implements readDto{
    @IsOptional()
    @IsNumberString()
    id: number;

    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    descripcion: string;
}