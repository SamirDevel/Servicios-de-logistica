import { Entity, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Chofer from "./Chofer";
import Vehiculo from "./Vehiculo";
import Viatico from "./Viaticos";
import { decimalConfig } from "../Utilities/Tools/Functions";
import Presupuesto from "./Presupuesto";
import Checkout from "./Checkout";
import Entrega from "./Entrega";
import DetalleRuta from "./Detalle";

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
    //foto
    
    @JoinColumn({name:'Id_Chofer'})
    @ManyToOne(()=>Chofer, cho=>cho.rutas)
    chofer:Chofer
    
    @JoinColumn({name:'Id_Vehiculo'})
    @ManyToOne(()=>Vehiculo, veh=>veh.rutas)
    vehciculo:Vehiculo

    @OneToMany(()=>Viatico, via=>via.idRuta)
    viaticos:Viatico[]

    @OneToMany(()=>Entrega, ent=>ent.idRuta)
    entregas:Entrega[]

    @OneToMany(()=>DetalleRuta, det=>det.idRuta)
    detalles:DetalleRuta[]

    @OneToOne(()=>Presupuesto, pre=>pre.idRuta)
    presupuesto:Presupuesto

    @OneToOne(()=>Checkout, che=>che.idRuta)
    checkout:Checkout
}