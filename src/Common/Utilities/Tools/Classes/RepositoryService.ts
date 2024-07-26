import { Repository } from "typeorm";
import MainRepository from "./MainRepository";
import BooleanExpression from "src/Common/Interfaces/BooleanInterfaces.interface";
import CRUD from "src/Common/Interfaces/CRUD.interface";
import MainError from "src/Common/Interfaces/Error.interface";
import { MainKeys, MainObject } from "src/Common/types/Keys.types";
import Result from "./Result";

export default abstract class RepositoryService<T> implements CRUD<T>{
    protected repo:MainRepository<T>
    constructor(
        protected repoBase:Repository<T>,
        alias:string,
    ){
        this.repo = new MainRepository<T>(this.repoBase, alias)
    }
    abstract create<J>(data: any, extras?:any):Promise<Result<T>>|Promise<Result<J>>;
    abstract read<J>(filters: any, columns: MainKeys<T>[], extras?:any):Promise<Result<T>>|Promise<Result<J>>;
    abstract update<J>(id: number, data:any, extras?:any):Promise<Result<T>>|Promise<Result<J>>;

    protected updateObject(origin:T, data:Partial<T>){
        const keys = Object.keys(data);
        for(const key of keys){
            if(data[key]!==undefined &&data[key]!==null){
                origin[key] = data[key];
            }
        }
    }
}