import axios, { AxiosError, AxiosInstance } from 'axios'
import { IErrorResponse } from '@/uitils/interface'

export const parseAxiosError = (error: AxiosError<IErrorResponse | any>) => {
    if (error.isAxiosError && error?.response) {
        return error?.response?.data;
    }
}

export class ClientBaseService {

    protected httpClient: AxiosInstance = axios.create({ baseURL: process.env.NEXT_CLIENT_URL });
    protected CLIENT_API_END_POINTS = {
        REGISTER: '/api/auth/register',
        LOGIN: "/api/auth/login",
        VALID_USER: "/api/auth/valid-user"
    }

    constructor() {
        this.httpClient.interceptors.request.use()
    }

}