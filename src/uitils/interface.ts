export interface IRegister {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    mobile: string,
    roles: string[],
    username: string,
}
export interface ILogin {
    userId: string,
    password: string
}

export type ISuccessResponse<T = any> = {
    data: T,
    status: string,
    message: string
    statusCode?: number
    config?:any
}

export type IErrorResponse<T = any> = {
    error: T,
    data?: unknown,
    status: string,
    message: string | any,
    statusCode?: number
    config?:any
}
