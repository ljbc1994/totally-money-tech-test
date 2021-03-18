export interface IApiResult<ResultType, ErrorType extends object = { message: string }> {
    result?: ResultType;
    error?: ErrorType;
}
