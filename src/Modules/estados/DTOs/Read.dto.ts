import { IsNumberString, IsOptional, IsString } from "class-validator";
import { readDto } from "../estados.service";

export default class ReadEstadoDto implements readDto{
    @IsNumberString()
    @IsOptional()
    id: number;

    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion: string;
}