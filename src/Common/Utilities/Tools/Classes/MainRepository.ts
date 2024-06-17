import { Repository } from "typeorm";
import CRUD from "../../../../Common/Interfaces/CRUD.interface";
import { MainKeys } from "../../../types/Keys.types";
import ErrorsService from "../../Services/Errors.service";

export default abstract class MainRepository<T> implements CRUD<T>{
    constructor(
        private repo:Repository<T>,
        protected alias: string,
        protected area:string,
        protected errorsService:ErrorsService
    ){

    }
    async create(data: MainKeys<T>, message:string){
        return await this.errorsService.sqlError<string>(this.area, `Ha habido un problema al crear el registro`,
            async ()=>{
            const newT = this.repo.create(data as T);
            //await this.repo.save(newT);
            return message
        })
    }
    read: (filters: Partial<T>) => Promise<T[]>;
    update: (id: number, data: Partial<T>) => Promise<string>;
    //abstract delete?: (id: number) => Promise<string>;
    protected getQb(){
        this.repo.create()
        return this.repo.createQueryBuilder(this.alias)
    }
}