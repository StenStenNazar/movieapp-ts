import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/axios.type";
import {IGenre} from "../interfaces/genre.interface";

 export const genreService = {
    getGenre :():IRes<IGenre[]> => axiosService.get(urls.genre)
}