import { ErrorCode } from "../types/Errors.types"

export default interface MainError{
    area:string
    messaje:string
    codigo:ErrorCode
}