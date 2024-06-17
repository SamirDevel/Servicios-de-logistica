import { MainKeys } from "../types/MainKeys.type";

export default interface CRUD<T>{
    create:(data: MainKeys<T>)=> Promise<string>;
    read:(filters: Partial<T>)=> Promise<T[]> 
    update:(filters: Partial<T>, data: Partial<T>)=>Promise<string>;
    delete?:(id: number)=> Promise<string>;
    alias:string
}