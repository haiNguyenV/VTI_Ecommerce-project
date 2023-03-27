import axios from "axios";

const baseUrl = "http://vti-ecommerce.foxcode.site";

const axiosClient = axios.create({
    baseURL: baseUrl
});

export default axiosClient;