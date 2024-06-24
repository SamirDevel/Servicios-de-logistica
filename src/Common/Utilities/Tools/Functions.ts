import { MainObject } from 'src/Common/types/Keys.types'

export function  decimalConfig(name:string){
    return {
        name,
        presicion:12,
        scale:2
    }
}

export * as fns from './Functions'