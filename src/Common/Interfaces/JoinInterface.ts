import { MainKeys } from "../types/Keys.types"
import { BooleanExpression } from "./BooleanInterfaces.interface"
export interface JoinInterface<T, U>{
    alias:string
    selections:MainKeys<U>[]
    origin:keyof T
    filters:Required<BooleanExpression<U>>[]
    joins?:JoinInterface<U, any>[]
}