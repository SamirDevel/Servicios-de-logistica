export default class Result<T>{
    isSuccess:boolean
    constructor(
        private failureMessage:string,

    ){

    }
    execute(callback:Function){
        this.isSuccess = callback();
    }

    private success(){

    }

    private failure(){

    }
}