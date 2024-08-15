import { EstadosModule } from "./estados/estados.module"
import { ConceptosModule } from "./conceptos/conceptos.module"
import { ChoferesModule } from "./choferes/choferes.module"
import { VehiculosModule } from "./vehiculos/vehiculos.module"
import { DbfModule } from "./dbf/dbf.module"

const modulesList:any[] = [
    EstadosModule,
    ConceptosModule,
    ChoferesModule,
    VehiculosModule,
    DbfModule
]

export default modulesList