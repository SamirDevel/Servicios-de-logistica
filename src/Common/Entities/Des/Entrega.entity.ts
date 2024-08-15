import { Entity, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import DetalleRuta from "./Detalle.entity";
import Foto from "./Foto.entity";

@Entity({name:'Entregas'})
export default class Entrega extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.entregas)
    ruta:Ruta

    @Column({name:'Cliente'})
    cliente:string

    @Column({name:'Incidencia'})
    incidencia?:string|null
    //foto

    @Column({name:'Calle'})
    calle:string

    @Column({name:'Interior'})
    interior?:string

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

    @JoinColumn({name:'Id_Foto'})
    @OneToOne(()=>Foto, fot=>fot.entrega, {cascade:true})
    foto:Foto

    @OneToMany(()=>DetalleRuta, det=>det.entrega, {cascade:true})
    detalles:DetalleRuta[]

}