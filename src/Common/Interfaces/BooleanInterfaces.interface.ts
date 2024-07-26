import { BooleanOperator } from "../types/Boolean.types"


export default interface BooleanExpression<T>{
    variable:keyof T
    operator:BooleanOperator
    value:any
    alias:string
}
