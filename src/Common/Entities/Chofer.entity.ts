import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";

@Entity({name:'Choferes'})
export default class Chofer extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string

    @Column({name:'Licencia'})
    licencia:string

    @Column({name:'Vigencia'})
    vigencia:Date

    @Column({name:'Codigo'})
    codigo:string

    @OneToMany(()=>Ruta, rut=>rut.chofer)
    rutas:Ruta[]
} 