import { CuentasModule } from "./cuentas/cuentas.module"
import { EstadosModule } from "./estados/estados.module"
import { ChoferesModule } from "./choferes/choferes.module"

const repositoriesModules:any[] = [
    CuentasModule,
    EstadosModule,
    ChoferesModule
]

export default repositoriesModules