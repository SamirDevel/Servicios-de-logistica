import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta";

@Entity({name:'Vehiculos'})
export default class Vehiculo extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string
    
    @Column({name:'Año'})
    año:number

    @Column({name:'Codigo'})
    codigo:string

    @Column({name:'Capacidad'})
    capacidad:number

    @Column({name:'Placas'})
    placas:string

    @OneToMany(()=>Ruta, rut=>rut.vehciculo)
    rutas:Ruta[]
} 