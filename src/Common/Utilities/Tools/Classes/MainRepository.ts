import { Repository } from "typeorm";
import CRUD from "../../../../Common/Interfaces/CRUD.interface";
import { MainKeys, MainObject } from "../../../types/Keys.types";
import MainQueryBuilder from "./MainQueryBuilder";
import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import { JoinInterface } from "src/Common/Interfaces/JoinInterface";

export default class MainRepository<T> implements CRUD<T>{
    constructor(
        private repo:Repository<T>,
        protected alias: string,
        protected whereOption:BooleanExpression<T>[]
    ){

    }
    async create(data: Partial<MainObject<T>>, successMessage:string){
        const newT = this.repo.create(data as T);
        //console.log(newT)
        await this.repo.save(newT);
        return successMessage
    }

    buildSelect<U>(qb:MainQueryBuilder<U>, columns:MainKeys<U>[]){
        for(const i in columns){
            const column = columns[i];
            qb.addSelect(column);
        }
        return qb;
    }
    private getTypedData<U>(option:BooleanExpression<T>|BooleanExpression<U>, values:any){
        const {variable, operator, alias} = option
        const value = values[variable]
        return {
            variable,
            operator,
            value,
            alias
        }
    }

    private makeFilters(values:Partial<T>){
        const list = this.whereOption
        const filters:Required<BooleanExpression<T>>[] = new Array();
        for(const option of list){
            const newFilter = this.getTypedData(option, values)
            filters.push(newFilter)
        }
        return filters
    }
    
    buildFilters<U>(qb:MainQueryBuilder<T>|MainQueryBuilder<U>, values:Partial<T>, joinList?:Required<BooleanExpression<U>>[]){
        const IsU = joinList!==undefined
        const filters =  IsU
            ?joinList
            :this.makeFilters(values)
        for(const filter of filters){
            if(IsU===true){
                if(filter.value!==undefined)(qb as MainQueryBuilder<U>).addWhere(filter as Required<BooleanExpression<U>>);
            }else{
                if(filter.value!==undefined){
                    (qb as MainQueryBuilder<T>).addWhere(filter as Required<BooleanExpression<T>>)
                };
            }
        }
        //console.log(qb.debug())
        return qb
    }
    private join<U>(query:MainQueryBuilder<T>|MainQueryBuilder<U>, joins:JoinInterface<T,U>[]){
        for(const join of joins){
            console.log(join)
            const joined = query.join<U>(join.alias, join.origin as any);
            const joinedSelected = this.buildSelect<U>(joined, join.selections)
            const joinedFiltred = this.buildFilters<U>(joinedSelected, undefined, join.filters)
            if(join.joins!==undefined)this.join(joinedFiltred, join.joins as any)
        }
        return query;
    }
    async read<U=undefined>(values: Partial<T>, columns:MainKeys<T>[], joins?:JoinInterface<T,U>[]){
        const qb = this.getQb();
        qb.select()
        const qbSelected = this.buildSelect(qb, columns)
        const qbFiltred = this.buildFilters(qbSelected, values)
        if(joins!==undefined){
            this.join<U>(qbFiltred, joins)
        }
        console.log(qbFiltred.debug())
        return qbFiltred.getMany()
    }
    update: (id: number, data: Partial<T>) => Promise<string>;
    //abstract delete?: (id: number) => Promise<string>;
    protected getQb(){
        return new MainQueryBuilder<T>((this.repo.createQueryBuilder(this.alias)), this.alias);
    }
}