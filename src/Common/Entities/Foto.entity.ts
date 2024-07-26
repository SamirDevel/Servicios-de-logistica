import { Entity, Column, JoinColumn, OneToOne, CreateDateColumn, AfterLoad } from "typeorm";
import BaseEntity from "./BaseEntity";
import Ruta from "./Ruta.entity";
import Checkout from "./Checkout.entity";
import * as fs from 'fs'
import Viatico from "./Viatico.entity";
import Entrega from "./Entrega.entity";

@Entity({name:'Fotos'})
export default class Foto extends BaseEntity{
    @Column({name:'URL'})
    url:string

    @Column({name:'Fecha'})
    fecha:Date

    @Column({name:'Hora'})
    hora:string

    @OneToOne(()=>Ruta, rut=>rut.foto)
    ruta:Ruta

    @OneToOne(()=>Entrega, ent=>ent.foto)
    entrega:Entrega

    @OneToOne(()=>Viatico, via=>via.foto)
    viatico:Viatico

    @OneToOne(()=>Checkout, che=>che.foto)
    checkout:Checkout

    image:string|null
    @AfterLoad()
    getImage(){
        this.image = fs.existsSync(this.url)===true
            ?fs.readFileSync(this.url).toString('base64')
            :null
    }
}