import { Injectable } from "@nestjs/common";
import MainError from "../../../Common/Interfaces/Error.interface";

@Injectable()
export default class ErrorsService{
    async sqlError<T>(area:string, messaje:string, callback:Function){
        try {
            const result:T = await callback();
            return result
        }catch(error) {
            console.log(error);
            const newError:MainError = { 
                messaje,
                codigo:'SQL',
                area
            }
            return newError;
        }
    }
}