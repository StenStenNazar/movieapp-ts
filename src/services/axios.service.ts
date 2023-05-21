import axios from "axios";

import {MoviesBaseURL} from "../constants/urls";
import {token} from "../token/token";

const axiosService = axios.create({
    baseURL: MoviesBaseURL
})

axiosService.interceptors.request.use(res => {
    res.headers.Authorization = token
    return res
})

export {
    axiosService
}

