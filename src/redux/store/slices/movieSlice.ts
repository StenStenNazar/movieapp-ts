import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../../services/movie.service";
import {IPage} from "../../../interfaces/page.interface";
import {IMovie} from "../../../interfaces/movie.interface";


interface IState {
    movies: IMovie[]
    page: number


}

const initialState: IState = {
    movies: [],
    page: 1

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
            })
})

const {actions, reducer: movieReducer} = movieSlice

const movieActions = {
    ...actions,
    getPages
}

export {
    movieActions,
    movieReducer,
}