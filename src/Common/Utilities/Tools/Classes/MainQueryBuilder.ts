import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import { QueryBuilderTypes, WhereQueryBuilder } from "src/Common/types/Builder.types";
import { MainKeys } from "src/Common/types/Keys.types";
import { SelectQueryBuilder } from "typeorm";

export default class MainQueryBuilder<T>{
    protected _parent:MainQueryBuilder<any>
    constructor(
        protected builder:QueryBuilderTypes<any>,
        protected _alias:string,
        parent?:MainQueryBuilder<any>
        
    ) {
        if(parent===undefined)parent=null
    }

    public get alias(){
        return this._alias
    }
    public get parent(){
        return this._parent
    }

    select(){
        this.builder = this.builder.select(`${this.alias}.id`);
        return this     
    }

    addSelect(column:MainKeys<T>){
        (this.builder as SelectQueryBuilder<T>).addSelect(`${this.alias}.${column.toString()}`);
        return this
    }

    addWhere(filter:Required<BooleanExpression<T>>){
        const {variable, operator, alias, value} = filter;
        (this.builder as WhereQueryBuilder<T>)
            .andWhere(`${this.alias}.${variable.toString()} ${operator} :${alias}`, {[alias]:value})
        return this;
    }

    getMany(){
        return (this.builder as SelectQueryBuilder<T>).getMany()
    }

    getRawMany(){
        return (this.builder as SelectQueryBuilder<T>).getRawMany()
    }

    join<U>(alias:string, key:keyof T){
        (this.builder as SelectQueryBuilder<T>)
            .leftJoin(`${this._alias}.${key.toString()}`, alias)
            .addSelect(`${alias}.id`);
        return new MainQueryBuilder<U>(this.builder, alias, this)
    }

    back(){
        return new MainQueryBuilder(this.builder, this.parent.alias, this.parent.parent);
    }

    debug(){
        return this.builder.getQueryAndParameters();
    }
}