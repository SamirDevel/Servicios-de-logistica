import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Chofer from "./Chofer.entity";

@Entity({name:'Estados'})
export default class Estado extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string

    @Column({name:'Descripcion'})
    descripcion:string

    @OneToMany(()=>Ruta, rut=>rut.estado)
    rutas:Ruta[]

    @OneToMany(()=>Chofer, cho=>cho.estado)
    choferes:Chofer[]
}