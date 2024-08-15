import { Entity, Column, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import { decimalConfig } from "../../Utilities/Tools/Functions";
import Ruta from "./Ruta.entity";
import Foto from "./Foto.entity";

@Entity({name:'Checkouts'})
export default class Checkout extends BaseEntity{
    @Column({name:'Hora_Final'})
    horaF:string
    
    @Column({name:'Fecha_Final'})
    fechaF:Date
    
    @Column({name:'Kilometraje_Final'})
    KMF:number
    
    @Column('decimal' , decimalConfig('Gas_Final'))
    GasF:number

    @JoinColumn({name:'Id_Ruta'})
    @OneToOne(()=>Ruta, rut=>rut.checkout)
    idRuta:Ruta

    @JoinColumn({name:'Id_Checkout'})
    @OneToOne(()=>Foto, fot=>fot.checkout)
    foto:Foto
}