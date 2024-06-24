import { IsOptional, IsString } from "class-validator";
import Estado from "src/Common/Entities/Estado.entity";

export default class ReadEstadoDTO implements Partial<Estado>{
    @IsOptional()
    @IsString()
    id: number;
    
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    descripcion: string;
}