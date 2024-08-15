import 'reflect-metadata'
export default function Column(name:string):PropertyDecorator{
    return function(target:Object, propertyKey:string|symbol){
        console.log(target)
        Reflect.defineMetadata('dbf:column', name, target, propertyKey)
        Object.defineProperty(target, propertyKey, {
            enumerable:true,
            configurable:true,
            writable:true
        })
    }
}