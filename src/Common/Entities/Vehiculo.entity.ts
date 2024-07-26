import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Estado from "./Estado.entity";

@Entity({name:'Vehiculos'})
export default class Vehiculo extends BaseEntity{
    @Column({name:'Codigo'})
    codigo:string

    @Column({name:'Capacidad'})
    capacidad:number

    @Column({name:'Vigencia_seguro'})
    vigencia:string

    @JoinColumn({name:'Id_Estado'})
    @ManyToOne(()=>Estado, est=>est.vehiculos)
    estado:Estado

    @OneToMany(()=>Ruta, rut=>rut.vehiculo)
    rutas:Ruta[]
} 