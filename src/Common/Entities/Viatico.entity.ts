import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Concepto from "./Concepto.entity";
import { decimalConfig } from "../Utilities/Tools/Functions";
import Foto from "./Foto.entity";

@Entity({name:'Viaticos'})
export default class Viatico extends BaseEntity{
    @JoinColumn({name:'Id_Ruta'})
    @ManyToOne(()=>Ruta, rut=>rut.viaticos)
    idRuta:Ruta
    
    @JoinColumn({name:'Id_Foto'})
    @OneToOne(()=>Foto, fot=>fot.viatico, {cascade:true})
    foto:Foto
    
    @JoinColumn({name:'Id_Concepto'})
    @ManyToOne(()=>Concepto, con=>con.viaticos)
    idConcepto:Concepto

    @Column('decimal' , decimalConfig('Costo'))
    costo:number

}