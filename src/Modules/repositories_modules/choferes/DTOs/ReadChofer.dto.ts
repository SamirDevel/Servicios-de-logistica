import Chofer from "src/Common/Entities/Chofer.entity";
import { IsString, IsOptional } from "class-validator";

export default class ReadChoferDTO implements Partial<Chofer>{
    @IsString()
    @IsOptional()
    nombre: string;
    
    @IsString()
    @IsOptional()
    licencia: string;
    
    @IsString()
    @IsOptional()
    vigencia: Date;
    
    @IsString()
    @IsOptional()
    codigo: string;
    
    @IsOptional()
    @IsString()
    findEstado :string;
}