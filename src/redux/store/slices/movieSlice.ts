import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../../services/movie.service";
import {IPage} from "../../../interfaces/page.interface";
import {IMovie} from "../../../interfaces/movie.interface";



interface IState {
    movies: IMovie[]
    page: number
    currentPage: number
    total_pages:number| null
    loading:boolean,
    IdOfGenre:number|null
    trigger:boolean
    notFoundTrigger:boolean

}

const initialState: IState = {
    movies: [],
    page: 1,
    currentPage:1,
    loading:false,
    IdOfGenre:null,
    total_pages:null,
    trigger:true,
    notFoundTrigger:false,
}

const getPages = createAsyncThunk<IPage<IMovie[]>, {genreId:string , numberOfPage: number }>(
    'movieSlice/getPages',
    async ({genreId,numberOfPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSelectedPAge(genreId,numberOfPage)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieGenres = createAsyncThunk<IPage<IMovie[]>, {idOfGenre:number}>(
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

const getSearchedMovie = createAsyncThunk<IPage<IMovie[]>, {title:string}>(
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

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setIdOfGenre:(state, action)=>{
            state.IdOfGenre = action.payload.id
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getPages.fulfilled, (state, action) => {
                let {results, page} = action.payload
                state.movies = results
                state.page = page
                // state.loading = false
            })
            .addCase(getMovieGenres.fulfilled,(state, action)=>{
                let {results,page,total_pages} = action.payload
                state.movies = results
                // state.loading = false
                state.page = page
                state.total_pages = total_pages
            })
            .addCase(getSearchedMovie.fulfilled,(state, action)=>{
                let {results} = action.payload
                state.movies = results
                // state.loading = false
                state.trigger= false
            })
            // .addCase(getMovieVideo.fulfilled,(state,action)=>{
            //
            // })
            .addMatcher(isPending(getMovieGenres,getPages),(state)=>{
                // state.loading = true
            })
            .addMatcher(isFulfilled(getMovieGenres,getPages),(state)=>{
                state.trigger= true
            })
})
const {actions, reducer: movieReducer} = movieSlice

const movieActions = {
    ...actions,
    getPages,
    getMovieGenres,
    getSearchedMovie,
}

export {
    movieActions,
    movieReducer,
}