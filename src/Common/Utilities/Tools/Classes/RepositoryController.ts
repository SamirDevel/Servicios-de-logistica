import CRUD from "src/Common/Interfaces/CRUD.interface";
import { MainObject } from "src/Common/types/Keys.types";
import RepositoryService from "./RepositoryService";
import { ErrorsService } from "src/Modules/Areas/errors/errors.service";
import MainError from "src/Common/Interfaces/Error.interface";

export default abstract class RepositoryController<T> implements CRUD<T>{
    protected abstract mainService:RepositoryService<T>
    constructor(
        protected area:string
    ){

    }
    abstract create(data: MainObject<T>|any):Promise<string|MainError>;
    abstract read(filters: Partial<T>|any):Promise<T[]|MainError>;
    abstract update(id: number, data: Partial<T>):Promise<string|MainError>;
        
    protected async  executeSQL<T>(callback:Function, errorMessage:string):Promise<MainError|T>{
        const result = await ErrorsService.sqlError(this.area, errorMessage)<T>(callback)
        return result.isSuccess===true
            ?result.value as T
            :result.error
    }
}