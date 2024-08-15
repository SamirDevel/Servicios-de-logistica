import { PrimaryGeneratedColumn } from "typeorm";

export default abstract class BaseEntity{
    @PrimaryGeneratedColumn({name:'Id'})
    id:Number
}