import axios from "axios";

class AxiosInstance {
    constructor() {
        this.axiosInstance = axios.create({
            timeout: 5000,
            headers: {

                "Content-type": "application/json",
            }
        });

        // request interceptor

        this.axiosInstance.interceptors.request.use(
            (config) => {
                console.log("API Request", config.url);
                return config;
            },

            (error) => {
                return Promise.reject(error)
            }
        );

        // response interceptor

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                console.log("API Error", error.message);
                return Promise.reject(error);
            }
        )



    }

    getInstance() {
        return this.axiosInstance;
    }
}

export default new AxiosInstance().getInstance();