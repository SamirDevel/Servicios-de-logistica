import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta";
import Concepto from "./Concepto";
import { decimalConfig } from "../Utilities/Tools/Functions";

@Entity({name:'Presupuestos'})
export default class Presupuesto extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @OneToOne(()=>Ruta, rut=>rut.presupuesto)
    idRuta:Ruta
    
    @JoinColumn({name:'Id_Concepto'})
    @ManyToOne(()=>Concepto, con=>con.presupuesto)
    idConcepto:Concepto

    @Column('decimal' , decimalConfig('Presupuesto'))
    presupuesto:number
}