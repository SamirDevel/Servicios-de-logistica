import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Concepto from "./Concepto.entity";
import { decimalConfig } from "../Utilities/Tools/Functions";
@Entity({name:'Viaticos'})
export default class Viatico extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.viaticos)
    idRuta:Ruta
    
    @Column({name:'Foto'})
    foto:string
    
    @JoinColumn({name:'Id_Concepto'})
    @ManyToOne(()=>Concepto, con=>con.viaticos)
    idConcepto:Concepto

    @Column('decimal' , decimalConfig('Costo'))
    costo:number

}