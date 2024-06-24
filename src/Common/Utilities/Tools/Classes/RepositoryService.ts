import { Repository } from "typeorm";
import MainRepository from "./MainRepository";
import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import CRUD from "src/Common/Interfaces/CRUD.interface";
import MainError from "src/Common/Interfaces/Error.interface";
import { MainKeys, MainObject } from "src/Common/types/Keys.types";
import Result from "./Result";

export default abstract class RepositoryService<T> implements CRUD<T>{
    protected repo:MainRepository<T>
    constructor(
        protected repoBase:Repository<T>,
        alias:string,
        whereOptions:BooleanExpression<T>[]
    ){
        this.repo = new MainRepository<T>(this.repoBase, alias, whereOptions)
    }
    abstract create(data: MainObject<T>, message: string):Promise<string>;
    abstract read(filters: Partial<T>, columns: MainKeys<T>[]):Promise<T[]>;
    abstract update(id: number, data: Partial<T>):Promise<string>;
}