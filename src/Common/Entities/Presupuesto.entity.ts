import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Concepto from "./Concepto.entity";
import { decimalConfig } from "../Utilities/Tools/Functions";

@Entity({name:'Presupuestos'})
export default class Presupuesto extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.presupuestos)
    idRuta:Ruta
    
    @JoinColumn({name:'Id_Concepto'})
    @ManyToOne(()=>Concepto, con=>con.presupuestos)
    idConcepto:Concepto

    @Column('decimal' , decimalConfig('Presupuesto'))
    presupuesto:number
}