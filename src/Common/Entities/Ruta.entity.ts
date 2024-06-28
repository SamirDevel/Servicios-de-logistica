import { Entity, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Chofer from "./Chofer.entity";
import Vehiculo from "./Vehiculo.entity";
import Viatico from "./Viatico.entity";
import { decimalConfig } from "../Utilities/Tools/Functions";
import Presupuesto from "./Presupuesto.entity";
import Checkout from "./Checkout.entity";
import Entrega from "./Entrega.entity";
import DetalleRuta from "./Detalle.entity";
import Estado from "./Estado.entity";

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

    @Column({name:'Foto'})
    foto:string

    @Column({name:'Incidencia'})
    incidencia?:string|null
    
    /*@JoinColumn({name:'Id_Chofer'})
    @ManyToOne(()=>Chofer, cho=>cho.rutas)
    chofer:Chofer
    
    @JoinColumn({name:'Id_Vehiculo'})
    @ManyToOne(()=>Vehiculo, veh=>veh.rutas)
    vehciculo:Vehiculo*/

    @JoinColumn({name:'Id_Estado'})
    @ManyToOne(()=>Estado, est=>est.rutas)
    estado:Estado

    @Column({name:'Chofer'})
    chofer:string

    @Column({name:'vehciculo'})
    vehiculo:string

    @OneToMany(()=>Viatico, via=>via.idRuta)
    viaticos:Viatico[]

    @OneToMany(()=>Entrega, ent=>ent.ruta)
    entregas:Entrega[]

    @OneToMany(()=>Presupuesto, pre=>pre.idRuta)
    presupuestos:Presupuesto[]

    @OneToOne(()=>Checkout, che=>che.idRuta)
    checkout:Checkout
}