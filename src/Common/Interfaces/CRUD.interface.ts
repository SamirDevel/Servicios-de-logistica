import { MainKeys } from "../types/Keys.types";
import MainError from "./Error.interface";

export default interface CRUD<T>{
    create:(data: MainKeys<T>, message:string)=> Promise<string|MainError>;
    read:(filters: Partial<T>)=> Promise<T[]|MainError> 
    update:(id:number, data: Partial<T>)=>Promise<string|MainError>;
    delete?:(id: number)=> Promise<string|MainError>;
}