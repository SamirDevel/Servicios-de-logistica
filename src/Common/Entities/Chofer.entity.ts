import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Estado from "./Estado.entity";

@Entity({name:'Choferes'})
export default class Chofer extends BaseEntity{
    @Column({name:'Codigo'})
    codigo:string

    @JoinColumn({name:'Id_Estado'})
    @ManyToOne(()=>Estado, est=>est.choferes)
    estado:Estado

    @Column({name:'Vigencia'})
    vigencia:Date

    @OneToMany(()=>Ruta, rut=>rut.chofer)
    rutas:Ruta[]
} 