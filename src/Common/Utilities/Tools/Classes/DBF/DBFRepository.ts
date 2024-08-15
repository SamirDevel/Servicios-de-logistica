import { Injectable } from "@nestjs/common";
import DBFFile from "dbffile";
import CRUD from "src/Common/Interfaces/CRUD.interface";
import Result from "../Result";
import BooleanExpression from "src/Common/Interfaces/BooleanInterfaces.interface";

@Injectable()
export default class DBFRepository<T>{
    private filename:string
    private selfKeys:any
    constructor(
        entity:new()=>T
    ){
        this.filename = Reflect.getMetadata('dbf:filename',entity);
        this.selfKeys = new entity();
    };
    private async readDBF():Promise<Result<any[]>>{
        try {
            const dbf = await DBFFile.open(`${process.env.DBF_TABLES}/${this.filename}.dbf`, {includeDeletedRecords:true});
            const records = await dbf.readRecords();
            return Result.Success(records)
        } catch (error) {
            if(error instanceof Error) return Result.Failure(`${error.message}`);
            else return Result.Failure('Error no controlado')
        }
    }

    private mapEntity(entity: T){
        console.log(entity)
        const keys = Object.keys(entity)
        console.log(keys)
        /*for(const key of keys){
            console.log(key)
        }*/
    }

    private select(keys:keyof T[]){
        
    }
    private where(filters:BooleanExpression<T>){

    }

    OrderBy(key:keyof T){

    }

    async read(columns?:keyof T[], filters?:BooleanExpression<T>, orderKey?:keyof T):Promise<any>{
        const results = await this.readDBF();
        if(!results.isSuccess)return results;
        this.mapEntity(this.selfKeys)
        const objs = results.value.map(record=>{
            //console.log(record)
            return record
        });
        return objs
    }

}