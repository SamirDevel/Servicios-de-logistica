import { IsDateString, IsString } from "class-validator";
import Chofer from "src/Common/Entities/Chofer.entity";

export default class CreateChoferDTO implements Partial<Chofer>{
    @IsString()
    nombre: string;
    
    @IsString()
    licencia: string;
    
    @IsDateString()
    vigencia: Date;
    
    @IsString()
    codigo: string;

}