import { Entity, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
//import Chofer from "./Chofer.entity";
//import Vehiculo from "./Vehiculo.entity";
import Viatico from "./Viatico.entity";
import { decimalConfig } from "../Utilities/Tools/Functions";
import Presupuesto from "./Presupuesto.entity";
import Checkout from "./Checkout.entity";
import Entrega from "./Entrega.entity";
import Estado from "./Estado.entity";
import Foto from "./Foto.entity";
import Chofer from "./Chofer.entity";
import Vehiculo from "./Vehiculo.entity";

export type rutaJoin = Viatico|Presupuesto|Checkout|Entrega|Estado|Foto
@Entity({name:'Rutas'})
export default class Ruta extends BaseEntity{
    @Column({name:'Ruta'})
    ruta:string
    
    @Column({name:'Hora_Inicio'})
    horaI:string
    
    @Column({name:'Fecha_Inicio'})
    fechaI:Date
    
    @Column({name:'Kilometraje_Inicio'})
    KMI:number
    
    @Column('decimal' , decimalConfig('Gas_Inicio'))
    GasI:number

    @Column({name:'Incidencia'})
    incidencia?:string|null
    
    @JoinColumn({name:'Id_Chofer'})
    @ManyToOne(()=>Chofer, cho=>cho.rutas)
    chofer:Chofer
    
    @JoinColumn({name:'Id_Vehiculo'})
    @ManyToOne(()=>Vehiculo, veh=>veh.rutas)
    vehiculo:Vehiculo

    @JoinColumn({name:'Id_Estado'})
    @ManyToOne(()=>Estado, est=>est.rutas)
    estado:Estado

    @JoinColumn({name:'Id_Foto'})
    @OneToOne(()=>Foto, fot=>fot.ruta, {cascade:true})
    foto:Foto


    @OneToMany(()=>Viatico, via=>via.idRuta, {cascade:true})
    viaticos:Viatico[]

    @OneToMany(()=>Entrega, ent=>ent.ruta, {cascade:true})
    entregas:Entrega[]

    @OneToMany(()=>Presupuesto, pre=>pre.idRuta, {cascade:true})
    presupuestos:Presupuesto[]

    @OneToOne(()=>Checkout, che=>che.idRuta)
    checkout:Checkout
}