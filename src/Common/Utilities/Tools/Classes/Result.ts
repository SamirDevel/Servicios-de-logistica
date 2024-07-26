import MainError from "src/Common/Interfaces/Error.interface";

export default class Result<T>{
    constructor(
        public readonly value: T,
        public readonly isSuccess:boolean,
        public readonly error?:string
    ){

    }

    static Success<T>(value:T){
        return new Result(value, true)
    }
    static Failure<T>(error:string){
        return new Result<T>(null, false, error);
    }
}