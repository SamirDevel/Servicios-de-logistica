import Result from "../Utilities/Tools/Classes/Result";
import { MainKeys, MainObject } from "../types/Keys.types";
import MainError from "./Error.interface";

export default interface CRUD<T>{
    create:(data: MainObject<T>, message:string)=> Promise<string>|Promise<Result<string>>;
    read:(filters: Partial<T>, columns:MainKeys<T>[])=> Promise<T[]> |Promise<Result<T[]>>;
    update:(id:number, data: Partial<T>)=>Promise<string>|Promise<Result<string>>;
    delete?:(id: number)=> Promise<string>|Promise<Result<string>>
}