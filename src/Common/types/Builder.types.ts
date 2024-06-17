import { SelectQueryBuilder, UpdateQueryBuilder, InsertQueryBuilder, DeleteQueryBuilder } from "typeorm"

export type QueryBuilderTypes<T> = SelectQueryBuilder<T>|UpdateQueryBuilder<T>|InsertQueryBuilder<T>|DeleteQueryBuilder<T>
export type WhereQueryBuilder<T> = Exclude<QueryBuilderTypes<T>, InsertQueryBuilder<T>>