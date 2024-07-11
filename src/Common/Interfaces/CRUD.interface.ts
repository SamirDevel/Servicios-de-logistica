import Result from "../Utilities/Tools/Classes/Result";
import { MainKeys, MainObject } from "../types/Keys.types";
import MainError from "./Error.interface";
import { MainResult } from "../types/Errors.types";

export default interface CRUD<T>{
    create(data: MainObject<T>, message:string): Promise<MainResult<string|T>|T>;
    read:(filters: Partial<T>, columns:MainKeys<T>[])=> Promise<MainResult<T[]>>;
    update:(id:number, data: Partial<T>)=>Promise<MainResult<string>>;
    delete?:(id: number)=> Promise<MainResult<string>>
}