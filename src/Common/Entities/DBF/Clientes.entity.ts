import Codigo from "src/Common/Interfaces/Code.interface";
import Column from "../../../Common/Utilities/Decorators/DBF_Decorators_Entity/Column";
import Entity from "../../../Common/Utilities/Decorators/DBF_Decorators_Entity/Entity";

@Entity('clientes')
export default class Cliente implements Codigo{
    /*constructor(codigo?:string, nombre?:string){
        this.codigo=codigo
        this.nombre=nombre
    }*/
    @Column('CVE_CTE')
    codigo:string

    @Column('NOM_CTE')
    nombre:string
}