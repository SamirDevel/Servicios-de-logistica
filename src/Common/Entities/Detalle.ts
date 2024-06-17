import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta";
import Entrega from "./Entrega";

@Entity({name:'Detalles_Ruta'})
export default class DetalleRuta extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.detalles)
    idRuta:Ruta

    @JoinColumn({name:'Id_Entrega'})
    @ManyToOne(()=>Entrega, ent=>ent.detalles)
    entrega:Entrega

    @Column({name:'Empresa'})
    empresa:string

    @Column({name:'Serie'})
    serie:string

    @Column({name:'Folio'})
    folio:string
}