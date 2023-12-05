import axios, { AxiosError, AxiosInstance } from 'axios'
import { IErrorResponse } from '@/uitils/interface'
import { cookies } from 'next/headers'

export const parseAxiosError = (error: AxiosError<IErrorResponse | any>) => {
    if (error.isAxiosError && error?.response) {
        return error?.response?.data;
    }

}

export class ServerBaseService {
    protected httpServer: AxiosInstance = axios.create({ baseURL: process.env.NEXT_API_URL });

    protected SERVER_API_END_POINTS = {
        REGISTER: '/api/auth/signup',
        LOGIN: "/api/auth/signin",
        VALID_USER: "/api/auth/valid-user"
    }

    constructor() {
        this.httpServer.interceptors.request.use()
        this.httpServer.interceptors.request.use((config) => {
            if (!config.headers?.authorization) {
                config.headers['Authorization'] = `Bearer ${cookies().get("access_token")?.value}`;
            }
            return config;
        }, (error) => {
            console.error(error)
        });
    }
}