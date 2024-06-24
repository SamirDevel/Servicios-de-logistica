import CRUD from "src/Common/Interfaces/CRUD.interface";
import { MainObject } from "src/Common/types/Keys.types";
import RepositoryService from "./RepositoryService";

export default abstract class RepositorController<T> implements CRUD<T>{
    abstract create: (data: MainObject<T>, message: string) => Promise<string>;
    abstract read: (filters: Partial<T>, columns: Exclude<keyof T, "id">[]) => Promise<T[]>;
    abstract update: (id: number, data: Partial<T>) => Promise<string>;
    abstract mainService:RepositoryService<T>;
}