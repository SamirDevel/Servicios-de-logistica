import { Repository } from "typeorm";
import MainRepository from "./MainRepository";
import BooleanExpression from "src/Common/Interfaces/BooleanInterfaces.interface";
import CRUD from "src/Common/Interfaces/CRUD.interface";
import MainError from "src/Common/Interfaces/Error.interface";
import { MainKeys, MainObject } from "src/Common/types/Keys.types";
import Result from "./Result";

export default class RepositoryService<T> implements CRUD{
    protected repo:MainRepository<T>
    constructor(
        repoBase:Repository<T>,
        alias:string,
    ){
        this.repo = new MainRepository<T>(repoBase, alias)
    }
    async create(data: Partial<T>):Promise<Result<T>>{
        const entity = await this.repo.create(data)
        if(entity.isSuccess)return await this.repo.save(entity.value)
        return entity
    }
    async  read(filters: BooleanExpression<T>[], columns: MainKeys<T>[], extras?:any):Promise<Result<T[]>>{
        return await this.repo.read(filters, columns)
        
    }
    update: <J>(id: number, data:any, extras?:any)=>Promise<Result<T>>|Promise<Result<J>>;

    protected updateObject(origin:T, data:Partial<T>){
        const keys = Object.keys(data);
        for(const key of keys){
            if(data[key]!==undefined &&data[key]!==null){
                origin[key] = data[key];
            }
        }
    }
}