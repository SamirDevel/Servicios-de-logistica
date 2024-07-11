import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

function isValidTime(value: string): boolean {
    const [hours, minutes] = value.split(':').map(Number);
    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
}

export function IsHour(validationOptions?:ValidationOptions){
    return function(object:Object, propertyName:string){
        registerDecorator({
            name:'isTime',
            target:object.constructor,
            propertyName,
            options:validationOptions,
            validator:{
                validate(value:any, args:ValidationArguments){
                    if(typeof value !== 'string')return false
                    return /^\d{2}:\d{2}$/.test(value) && isValidTime(value);
                },
                defaultMessage(args:ValidationArguments){
                    return `${args.property} must be in the format HH:MM`;
                }
            }
        })
    }
}