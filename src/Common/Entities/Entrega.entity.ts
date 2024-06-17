import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import DetalleRuta from "./Detalle.entity";

@Entity({name:'Entregas'})
export default class Entrega extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.entregas)
    idRuta:Ruta

    @Column({name:'Cliente'})
    cliente:string

    @Column({name:'Incidencia'})
    incidencia?:string|null
    //foto

    @Column({name:'Calle'})
    calle:string

    @Column({name:'Interior'})
    interior:string

    @Column({name:'Exterior'})
    exterior:string

    @Column({name:'Codigo_Postal'})
    cp:number

    @Column({name:'Municipio'})
    municipio:string

    @Column({name:'Estado'})
    estado:string

    @Column({name:'Url'})
    url:string

    @OneToMany(()=>DetalleRuta, det=>det.entrega)
    detalles:DetalleRuta[]

}