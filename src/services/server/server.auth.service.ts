import { AxiosError } from "axios";

import { ServerBaseService, parseAxiosError } from "./server.base.service";
import { IErrorResponse, ILogin, IRegister, ISuccessResponse } from "@/uitils/interface";

export class ServerAuthService extends ServerBaseService {

    public async register(value: IRegister): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpServer.post(this.SERVER_API_END_POINTS.REGISTER, value);
            return data;
        } catch (error) {
            return parseAxiosError(error as AxiosError)
        }
    }

    public async login(value: ILogin): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpServer.post(this.SERVER_API_END_POINTS.LOGIN, value);
            return data;
        } catch (error: any) {
            return parseAxiosError(error as AxiosError)
        }
    }

    public async validUser(): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpServer.get(this.SERVER_API_END_POINTS.VALID_USER);
            return data;
        } catch (error: any) {
            return parseAxiosError(error as AxiosError)
        }
    }
}