import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/axios.type";
import {IGenre, IGenrePage} from "../interfaces/genre.interface";

 export const genreService = {
    getGenre :():IRes<IGenrePage<IGenre[]>> => axiosService.get(urls.allGenres)
}