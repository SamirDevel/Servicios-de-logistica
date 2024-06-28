import { CuentasModule } from "./cuentas/cuentas.module"
import { EstadosModule } from "./estados/estados.module"
import { RutasModule } from "./rutas/rutas.module"
import { ConceptosModule } from "./conceptos/conceptos.module"

const repositoriesModules:any[] = [
    ConceptosModule,
    CuentasModule,
    EstadosModule,
    RutasModule
]

export default repositoriesModules