import ApiClient from "../../config/axios/http";
import { PaginatedResult, ResponseData } from "../../types/interfaces/api-response.interface";
import { User } from "../../types/interfaces/Entities/User.entity";
import { GetUsersDto } from "../../types/interfaces/request/users-dto";

class UserService {
    async getUsers(requestPayload: GetUsersDto): Promise<ResponseData<PaginatedResult<User>>> {
        try {
            const response = await ApiClient.get<ResponseData<PaginatedResult<User>>>({
                url: "/users",
                params: requestPayload
            })

            if(response.isException) {
                if(response.error.response.data) {
                    throw new Error(response.error.response.data.message);
                }
                throw new Error("Error while retrieving users");
            }

            if(!response.response?.data.success) {
                throw new Error(response.response?.data.message);
            }

            return response.response?.data;

        } catch (error: any) {
            throw new Error(error.message ?? "Error while retrieving users");
            
        }
    }
}

export const userService = new UserService();