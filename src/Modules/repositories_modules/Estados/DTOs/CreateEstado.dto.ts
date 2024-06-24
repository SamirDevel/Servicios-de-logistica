import { IsString } from "class-validator";
import Estado from "src/Common/Entities/Estado.entity";

export default class CreateEstadoDTO implements Partial<Estado>{
    @IsString()
    nombre: string;
    
    @IsString()
    descripcion: string;
}