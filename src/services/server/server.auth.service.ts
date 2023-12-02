import { AxiosError } from "axios";

import { BaseService, parseAxiosError } from "../base.service";
import { IErrorResponse, ILogin, IRegister, ISuccessResponse } from "@/uitils/interface";

export class ServerAuthService extends BaseService {

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
}