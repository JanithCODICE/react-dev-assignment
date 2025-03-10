import ApiClient from "../../config/axios/http";
import { ResponseData } from "../../types/interfaces/api-response.interface";
import { LoginDto } from "../../types/interfaces/request/login-dto";
import { AuthResponse } from "../../types/interfaces/response/auth-response-dto";

class AuthService {

    async login(loginPayload: LoginDto): Promise<ResponseData<AuthResponse>> {
        try {
            const response = await ApiClient.post<ResponseData<AuthResponse>>({
                url: "/auth/login",
                data: loginPayload
            })

            if(response.isException) {
                if(response.error.response.data) {
                    throw new Error(response.error.response.data.message);
                }
                throw new Error("Error while login");
            }

           if(!response.response?.data.success) {
              throw new Error(response.response?.data.message);
           }

           return response.response?.data;

        } catch (error: any) {
              throw new Error(error.message ?? "Error while login");
        }
    }
}

export const authService = new AuthService();