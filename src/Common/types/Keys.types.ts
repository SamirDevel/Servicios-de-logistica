export type MainObject<T> = Omit<T, "id">
export type MainKeys<T> = Exclude<keyof T, "id">