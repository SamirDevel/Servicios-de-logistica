import { Repository } from "typeorm";
import CRUD from "../../../../Common/Interfaces/CRUD.interface";
import { MainKeys, MainObject } from "../../../types/Keys.types";
import MainQueryBuilder from "./MainQueryBuilder";
import  BooleanExpression  from "src/Common/Interfaces/BooleanInterfaces.interface";
import { JoinInterface } from "src/Common/Interfaces/JoinInterface";
import Result from "./Result";

export default class MainRepository<T> implements CRUD<T>{
    constructor(
        private repo:Repository<T>,
        protected alias: string,
    ){

    }
    async create(data: Partial<MainObject<T>>, successMessage:string):Promise<Result<String>>{
        try {
            const newT = this.repo.create(data as T);
            await this.repo.save(newT);
            return Result.Success(successMessage)
        } catch (error) {
            return Result.Failure(error)
        }
    }

    buildSelect<U>(qb:MainQueryBuilder<U>, columns:MainKeys<U>[]){
        for(const i in columns){
            const column = columns[i];
            qb.addSelect(column);
        }
        return qb;
    }
    
    buildFilters<U>(qb:MainQueryBuilder<U>, filters:Required<BooleanExpression<U>>[]){
        for(const filter of filters){
            if(filter.value!==undefined)
                (qb as MainQueryBuilder<U>)
                    .addWhere(filter as Required<BooleanExpression<U>>);
        }
        return qb
    }
    private join<U>(query:MainQueryBuilder<T>|MainQueryBuilder<U>, joins:JoinInterface<T,U>[]){
        for(const join of joins){
            const joined = query.join<U>(join.alias, join.origin as any);
            const joinedSelected = this.buildSelect<U>(joined, join.selections)
            const joinedFiltred = this.buildFilters<U>(joinedSelected, join.filters)
            if(join.joins!==undefined)this.join(joinedFiltred, join.joins as any)
        }
        return query;
    }
    async read<U=undefined>(filters: BooleanExpression<T>[], columns:MainKeys<T>[], joins?:JoinInterface<T,U>[]):Promise<Result<T[]>>{
        try {
            const qb = this.getQb();
            qb.select()
            this.buildSelect(qb, columns)
            this.buildFilters(qb, filters)
            if(joins!==undefined){
                this.join<U>(qb, joins)
            }
            const list = await qb.getMany();
            return Result.Success(list)
        } catch (error) {
            return Result.Failure(error)           
        }
    }
    update: (id: number, data: Partial<T>) => Promise<Result<any>>;
    //abstract delete?: (id: number) => Promise<string>;
    protected getQb(){
        return new MainQueryBuilder<T>((this.repo.createQueryBuilder(this.alias)), this.alias);
    }
}