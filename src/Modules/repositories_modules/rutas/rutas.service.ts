import { Injectable } from '@nestjs/common';
import Ruta from '../../../Common/Entities/Ruta.entity';
import RepositoryService from '../../../Common/Utilities/Tools/Classes/RepositoryService';
import { InjectRepository } from '@nestjs/typeorm';
import { BooleanExpression } from 'src/Common/Interfaces/BooleanInterfaces.interface';
import { Repository } from 'typeorm';
import { MainKeys, MainObject } from 'src/Common/types/Keys.types';
import { EntregasService } from './entregas.service';
import { PresupuestosService } from './presupuestos.service';
import Entrega from 'src/Common/Entities/Entrega.entity';
import { EstadosService } from '../estados/estados.service';
import { ConceptosService } from '../conceptos/conceptos.service';

type dto = Omit<MainObject<Ruta>, 'estado'|'checkout'|'viaticos'>

@Injectable()
export class RutasService extends RepositoryService<Ruta> {
    constructor(
        @InjectRepository(Ruta, 'des') repoBase: Repository<Ruta>,
        private serviceEntregas:EntregasService,
        private servicePresupuestos:PresupuestosService,
        private serviceEstados:EstadosService,
        private serviceConcepto: ConceptosService
    ){
        const options:BooleanExpression<Ruta>[]= [

        ]
        super(repoBase, 'Rut', options)
    }

    async create(data: dto): Promise<string> {
        const entregassList = data.entregas;
        const entregas = new Array();
        for(const i in entregassList){
            entregas.push(this.serviceEntregas.create(entregassList[i]));
        }
        const presupuestosList = data.presupuestos;
        const presupuestoLenht = presupuestosList.length
        const presupuestos = new Array();
        for(let i = 0; i<presupuestoLenht; i++){
            const presupuesto = presupuestosList[i]
            const idConcepto = (await (this.serviceConcepto.read({nombre:(presupuesto.idConcepto as unknown)as string }, ['nombre', 'descripcion'])))[0]
            if(idConcepto===undefined)return 'No ha seleccionado un concepto válido para un presupuesto. '
            presupuestos.push(this.servicePresupuestos.create({
                ...presupuesto,
                idConcepto
            }));
        }
        //console.log(await Promise.all(presupuestos))
        const estado = (await this.serviceEstados.read({nombre:"EN RUTA"},['nombre', 'descripcion']))[0]
        const ruta = this.repoBase.create({
            ...data,
            ...entregas,
            presupuestos:await Promise.all(presupuestos),
            estado
        })
        console.log(ruta)
        //console.log(data)
        return
    }

    read(filters: Partial<Ruta>, columns: MainKeys<Ruta>[]): Promise<Ruta[]> {
        return
    }

    update(id: number, data: Partial<Ruta>): Promise<string> {
        return
    }
}
