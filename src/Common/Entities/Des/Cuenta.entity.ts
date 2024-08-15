import { Entity, Column } from "typeorm";
import BaseEntity from "./BaseEntity";

@Entity({name:'Cuentas'})
export default class Cuenta extends BaseEntity{
    @Column({name:'Nombre'})
    nombre:string
    
    @Column({name:'Usuario'})
    usuario:string
    
    @Column({name:'Contraseña'})
    contraseña:string
}