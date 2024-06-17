import { Repository } from "typeorm";
import ErrorsService from "../../Services/Errors.service";
import MainRepository from "./MainRepository";

export default abstract class RepositoryService<T>{
    abstract repo:MainRepository<T>
    constructor(
        protected serviceErrors:ErrorsService,
        protected repoBase:Repository<T>
    ){

    }
}