import { BooleanExpression } from "src/Common/Interfaces/BooleanInterfaces.interface";
import { QueryBuilderTypes, WhereQueryBuilder } from "src/Common/types/Builder.types";
import { MainKeys } from "src/Common/types/Keys.types";
import { SelectQueryBuilder } from "typeorm";

export default class MainQueryBuilder<T, U=undefined>{
    protected _parent:MainQueryBuilder<U>|MainQueryBuilder<T>
    constructor(
        protected builder:QueryBuilderTypes<T>,
        protected _alias:string,
        parent?:MainQueryBuilder<U>|MainQueryBuilder<T>
    ) {
        this._parent = parent!==undefined?parent:null
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

    back(){
        return new MainQueryBuilder<T>(this.builder as undefined, this._parent.alias, this._parent.parent)
    }
}