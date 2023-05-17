import {createAsyncThunk, createSlice, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../../services/movie.service";
import {IPage} from "../../../interfaces/page.interface";
import {IMovie} from "../../../interfaces/movie.interface";


interface IState {
    movies: IMovie[]
    page: number
    currentPage: number
    loading:boolean
}

const initialState: IState = {
    movies: [],
    page: 1,
    currentPage:1,
    loading:false
}

const getPages = createAsyncThunk<IPage<IMovie[]>, { numberOfPage: number }>(
    'movieSlice/getPages',
    async ({numberOfPage}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSelectedPAge(numberOfPage)
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

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPages.fulfilled, (state, action) => {
                let {results, page} = action.payload
                state.movies = results
                state.page = page
                state.loading = false
            })
            .addCase(getMovieGenres.fulfilled,(state, action)=>{
                let {results, total_pages} = action.payload
                state.movies = results
                state.loading = false
            })
            .addMatcher(isPending(getMovieGenres,getPages),(state, action)=>{
                state.loading = true
            })
})
const {actions, reducer: movieReducer} = movieSlice

const movieActions = {
    ...actions,
    getPages,
    getMovieGenres
}

export {
    movieActions,
    movieReducer,
}