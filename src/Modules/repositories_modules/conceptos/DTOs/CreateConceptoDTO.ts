import { IsString } from "class-validator";
import Concepto from "src/Common/Entities/Concepto.entity";

export default class CreateConceptoDTO implements Partial<Concepto>{
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

}