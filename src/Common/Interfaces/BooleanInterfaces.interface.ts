import { BooleanOperator } from "../types/Boolean.types"


export interface BooleanExpression<T>{
    variable:keyof T
    operator:BooleanOperator
    value?:any
    alias:string
}
