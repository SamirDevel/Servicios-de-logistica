import { ErrorsService } from "src/Modules/Areas/errors/errors.service";
import Result from "./Result";

export default abstract class AreaService{
    constructor(
        private area:string
    ){

    }

    protected async  executeSQL<T>(callback:Function, message:string){
        return  await ErrorsService.sqlError(this.area, message)<T>(callback)
    }
}