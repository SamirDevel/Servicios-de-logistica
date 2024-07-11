import MainError from '../../../Common/Interfaces/Error.interface';
import Result from '../../../Common/Utilities/Tools/Classes/Result';

async function test<T>(callback:Function, errorData:MainError):Promise<Result<T>>{
    try {
        const result = await callback();
        return  Result.Success(result)
    } catch (error) {
        console.log(error)
        return Result.Failure(errorData)
    }
}

export class ErrorsService {
static sqlError(area:string, errorMessaje:string){
        const error:MainError ={
            area,
            codigo:"SQL",
            errorMessaje
        }
        return async function<T>(callback:Function){
            return await test(callback, error);
        }
    }
}
