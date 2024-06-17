import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Viatico from "./Viatico.entity";
import Presupuesto from "./Presupuesto.entity";

@Entity({name:'Conceptos'})
export default class Concepto extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string

    @Column({name:'Descripcion'})
    descripcion:string

    @OneToMany(()=>Viatico, via=>via.idConcepto)
    viaticos:Viatico[]

    @OneToMany(()=>Presupuesto, pre=>pre.idConcepto)
    presupuesto:Presupuesto[]
}