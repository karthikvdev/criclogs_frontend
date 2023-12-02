import axios, { AxiosError, AxiosInstance } from 'axios'
import { STATUS } from '@/uitils/constants'
import { IErrorResponse } from '@/uitils/interface'


export const parseAxiosError = (error: AxiosError<IErrorResponse | any>) => {
    if (error.isAxiosError && error?.response) {
        return error?.response?.data;
    }
  
}

export class BaseService {

    protected httpClient: AxiosInstance = axios.create({ baseURL: process.env.NEXT_API_URL });
    protected httpServer: AxiosInstance = axios.create({ baseURL: process.env.NEXT_API_URL });
    protected CLIENT_API_END_POINTS = {
        REGISTER: '/api/auth/register',
        LOGIN: "/api/auth/login"
    }
    protected SERVER_API_END_POINTS = {
        REGISTER: '/auth/signup',
        LOGIN: "/auth/signin"
    }
    constructor() {
        this.httpClient.interceptors.request.use()
        this.httpClient.interceptors.request.use((config) => {
            if (!config.headers?.authorization) {
                config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
            }
            return config;
        }, (error) => {
            // here we handle with API error.
            console.error(error)
        });
    }
}