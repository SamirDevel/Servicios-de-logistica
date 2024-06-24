import { Repository } from "typeorm";
import CRUD from "../../../../Common/Interfaces/CRUD.interface";
import { MainKeys, MainObject } from "../../../types/Keys.types";
import MainQueryBuilder from "./MainQueryBuilder";
import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import { ErrorsService } from "src/Modules/Areas/errors/errors.service";

export default class MainRepository<T> implements CRUD<T>{
    constructor(
        private repo:Repository<T>,
        protected alias: string,
        protected whereOption:BooleanExpression<T>[]
    ){

    }
    async create(data: MainObject<T>, successMessage:string){
        const newT = this.repo.create(data as T);
        await this.repo.save(newT);
        //console.log(newT)
        return successMessage
    }
    private makeFilters(values:Partial<T>){
        const list = this.whereOption
        const filters:Required<BooleanExpression<T>>[] = new Array();
        for(const i in list){
            const {variable, operator, alias} = list[i];
            if(values[variable]!==undefined)
                filters.push({
                    variable,
                    operator,
                    value:values[variable],
                    alias,
                })
        }
        return filters;
    }
    async read(values: Partial<T>, columns:MainKeys<T>[]){
        const qb = this.getQb();
        qb.select()
        for(const i in columns){
            const column = columns[i];
            qb.addSelect(column);
        }
        const filters = this.makeFilters(values);
        for(const i in filters){
            const filter = filters[i];
            qb.addWhere(filter);
        }
        return qb.getMany()
    }
    update: (id: number, data: Partial<T>) => Promise<string>;
    //abstract delete?: (id: number) => Promise<string>;
    protected getQb(){
        return new MainQueryBuilder<T>((this.repo.createQueryBuilder(this.alias)), this.alias);
    }
}