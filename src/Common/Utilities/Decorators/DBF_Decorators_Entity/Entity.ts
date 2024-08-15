import 'reflect-metadata'
export default function Entity(name:string):ClassDecorator{
    return function(target:Function){
        Reflect.defineMetadata('dbf:filename', name, target)
    }
}