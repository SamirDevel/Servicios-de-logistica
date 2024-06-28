import { IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import Concepto from "src/Common/Entities/Concepto.entity";

export default class ReadConceptoDTO implements Partial<Concepto>{
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