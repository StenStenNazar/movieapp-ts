import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../../services/movie.service";
import {IPage} from "../../../interfaces/page.interface";
import {IMovie} from "../../../interfaces/movie.interface";
import {IVideoPage} from "../../../interfaces/videopage.interface";
import {IVideo} from "../../../interfaces/video.interface";


interface IState {
    movies: IMovie[]
    page: number
    currentPage: number
    total_pages: number | null
    loading: boolean,
    IdOfGenre: number | null
    paginTrigger: boolean
    notFoundTrigger: boolean
    videos: IVideo[]
    curMovie: IMovie


}

const initialState: IState = {
    movies: [],
    page: 1,
    currentPage: 1,
    loading: false,
    IdOfGenre: null,
    total_pages: null,
    paginTrigger: false,
    notFoundTrigger: false,
    videos: [],
    curMovie: null
}

const getPages = createAsyncThunk<IPage<IMovie[]>, { genreId: string, numberOfPage: number }>(
    'movieSlice/getPages',
    async ({genreId, numberOfPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSelectedPAge(genreId, numberOfPage)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieGenres = createAsyncThunk<IPage<IMovie[]>, { idOfGenre: number }>(
    'movieSlice/getMovieGenres',
    async ({idOfGenre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSelectedGenre(idOfGenre)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getSearchedMovie = createAsyncThunk<IPage<IMovie[]>, { title: string }>(
    'movieSlice/getSearchedMovie',
    async ({title}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearchedMovie(title)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieVideo = createAsyncThunk<IVideoPage<IVideo[]>, { movieId: number }>(
    'movieSlice/getMovieVideo',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieVideo(movieId)
            return (await data)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setIdOfGenre: (state, action) => {
            state.IdOfGenre = action.payload.id
        },
        setCurMovie: (state, action) => {
            state.curMovie = action.payload.movie
        },
        setHomeTotalPage:(state, action)=>{
             state.total_pages = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getPages.fulfilled, (state, action) => {
                let {results, page} = action.payload
                state.movies = results
                state.page = page

            })
            .addCase(getMovieGenres.fulfilled, (state, action) => {
                let {results, page, total_pages} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
            })
            .addCase(getSearchedMovie.fulfilled, (state, action) => {
                let {results} = action.payload
                state.movies = results
                state.paginTrigger = false
            })
            .addCase(getMovieVideo.fulfilled, (state, action) => {
                const {results} = action.payload
                state.videos = results
            })
            .addCase(getMovieVideo.pending, (state) => {
                state.videos = []
            })
            .addMatcher(isFulfilled(getMovieGenres, getPages), (state) => {
                state.paginTrigger = true
            })

})
const {actions, reducer: movieReducer} = movieSlice

const movieActions = {
    ...actions,
    getPages,
    getMovieGenres,
    getSearchedMovie,
    getMovieVideo,
}

export {
    movieActions,
    movieReducer,
}