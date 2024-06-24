import { ErrorCode } from "../types/Errors.types"

export default interface MainError{
    area:string
    errorMessaje:string
    codigo:ErrorCode
}