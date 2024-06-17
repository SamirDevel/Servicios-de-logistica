import { Repository } from "typeorm";
import Chofer from "../Entities/Chofer.entity";
import MainRepositry from "../Utilities/Tools/Classes/MainRepository";
import ErrorsService from "../Utilities/Services/Errors.service";

export default class ChoferRepository extends MainRepositry<Chofer>{
    constructor(
        chofrepo:Repository<Chofer>,
        area:string, 
        errors:ErrorsService
    ){
        super(chofrepo, 'cho', area, errors)
    }
}