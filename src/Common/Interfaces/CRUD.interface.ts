import { MainKeys } from "../types/Keys.types";
import BooleanExpression from "./BooleanInterfaces.interface";
import Result from "../Utilities/Tools/Classes/Result";

export default interface CRUD<T>{
    create(data: any, extras?:any): Promise<Result<any>>;
    read:(filters: BooleanExpression<any>[], columns:MainKeys<T>[], extras?:any)=> Promise<Result<any>>;
    update:(id:number, data:any, extras?:any)=>Promise<Result<any>>;
    delete?:(id: number, extras?:any)=> Promise<Result<any>>;
}