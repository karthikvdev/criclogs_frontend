import { AxiosError } from "axios";
import { IErrorResponse, ILogin, IRegister, ISuccessResponse } from "@/uitils/interface";
import { ClientBaseService, parseAxiosError } from "./client.base.service";

export class ClientAuthService extends ClientBaseService {

    public async register(value: IRegister): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.post(this.CLIENT_API_END_POINTS.REGISTER, value);
            return data;
        } catch (error) {
            return parseAxiosError(error as AxiosError)
        }
    }

    public async login(value: ILogin): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.post(this.CLIENT_API_END_POINTS.LOGIN, value);
            return data;
        } catch (error) {
            return parseAxiosError(error as AxiosError)
        }
    }

    public async validUser(): Promise<ISuccessResponse | IErrorResponse> {
        try {
            const { data } = await this.httpClient.get(this.CLIENT_API_END_POINTS.VALID_USER);
            return data;
        } catch (error) {
            return parseAxiosError(error as AxiosError)
        }
    }

}