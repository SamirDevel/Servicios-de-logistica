import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Viatico from "./Viaticos";
import Presupuesto from "./Presupuesto";
@Entity({name:'Conceptos'})
export default class Concepto extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string

    @OneToMany(()=>Viatico, via=>via.idConcepto)
    viaticos:Viatico[]

    @OneToMany(()=>Presupuesto, pre=>pre.idConcepto)
    presupuesto:Presupuesto[]
}