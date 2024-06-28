import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsIn, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, IsUrl, ValidateNested } from "class-validator";
import DetalleRuta from "src/Common/Entities/Detalle.entity";


class DetalleDTO implements Partial<DetalleRuta>{
    @IsIn(['cdc', 'cmp'], {message:'El valor debe ser cdc o cmp según la empresa'})
    empresa: string;
    
    @IsString()
    serie: string;
    
    @IsNumber()
    folio: number;
}
class EntregaDTO {
    
    @IsString()
    cliente: string;
    
    @IsOptional()
    @IsString()
    incidencia: string;
    
    @IsString()
    calle: string;
    
    @IsString()
    @IsOptional()
    interior: string;
    
    @IsString()
    exterior: string;
    
    @IsString()
    cp: number;
    
    @IsString()
    municipio: string;
    
    @IsString()
    estado: string;
    
    @IsUrl()
    url: string;

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>DetalleDTO)
    @ArrayMinSize(1)
    detalles: DetalleDTO[];
}
class PresupuestosDTO {
    @IsString()
    idConcepto: string;
    
    @IsNumber()
    presupuesto: number;
}
export default class CreateRutaDTO{
    @IsString()
    ruta: string;
    
    @IsString()
    horaI: string;
    
    @IsDateString()
    fechaI: Date;
    
    @IsNumber()
    KMI: number;
    
    @IsNumber()
    GasI: number;
    
    @IsNotEmpty()
    foto: File;
    
    @IsOptional()
    @IsString()
    incidencia: string;
    
    @IsString()
    chofer: string;
    
    @IsString()
    vehiculo: string;

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>EntregaDTO)
    @ArrayMinSize(1)
    entregas: EntregaDTO[];

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>PresupuestosDTO)
    @ArrayMinSize(1)
    presupuestos:PresupuestosDTO[]
}