import Result from "../Utilities/Tools/Classes/Result";
import MainError from "../Interfaces/Error.interface";

export type ErrorCode = 'SQL'|'COD'|'OTH';
export type MainResult<T> = T|Result<T>|MainError