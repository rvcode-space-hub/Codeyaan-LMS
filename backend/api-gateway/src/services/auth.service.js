import Service from "../config/services.js";
import axiosInstance from "../utils/axios.js";

class AuthGateway {
    constructor() {
        this.baseUrl = Service.authService;
    }

    // 🔐 LOGIN
    async login(data) {
        try {
            const response = await axiosInstance.post(
                `${this.baseUrl}/api/auth/login`,
                data
            );

            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || "Auth Service Login Failed"
            );
        }
    }

    // 📝 REGISTER
    async register(data) {
        try {
            const response = await axiosInstance.post(
                `${this.baseUrl}/api/auth/register`,
                data
            );

            return response.data;
        } catch (error) {
            throw new Error(
                error.response?.data?.message || "Auth Service Register Failed"
            );
        }
    }
}

export default new AuthGateway();