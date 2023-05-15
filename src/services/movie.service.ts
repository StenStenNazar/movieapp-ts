import {IRes} from "../types/axios.type";

import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IPage} from "../interfaces/page.interface";
import {IMovie} from "../interfaces/movie.interface";


export const movieService = {
    getSelectedPAge :(numberOfPage:number):IRes<IPage<IMovie[]>> => axiosService.get(`${urls.page}${numberOfPage}`)
}