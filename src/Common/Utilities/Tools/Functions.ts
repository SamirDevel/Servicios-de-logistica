import Result from './Classes/Result'

export function  decimalConfig(name:string){
    return {
        name,
        presicion:12,
        scale:2
    }
}
export function isSucces(result:Result<any>, errorMessage:string){
    return result.isSuccess
            ?Result.Success(result.value)
            :Result.Failure(`${errorMessage} ${result.error}`)
}
export * as fns from './Functions'