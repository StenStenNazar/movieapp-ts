import {IRes} from "../types/axios.type";

import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IPage} from "../interfaces/page.interface";
import {IMovie} from "../interfaces/movie.interface";
import {IVideo} from "../interfaces/video.interface";


export const movieService = {
    getSelectedPAge: (genreId: string, numberOfPage: number): IRes<IPage<IMovie[]>> =>
        axiosService.get(`${urls.page}${numberOfPage}&${urls.movieWithGenre}${genreId}`),

    getSelectedGenre: (idOfGenre: number): IRes<IPage<IMovie[]>> =>
        axiosService.get(`${urls.moviesGenre}${idOfGenre}`),

    getSearchedMovie: (title: string): IRes<IPage<IMovie[]>> =>
        axiosService.get(`${urls.moviesSearch}${title}`),

    getMovieVideo :(movieId:number):IRes<IVideo[]> =>
        axiosService.get(`${urls.movieVideos}${movieId}/videos`)
}