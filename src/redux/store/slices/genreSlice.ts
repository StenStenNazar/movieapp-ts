import {AxiosError} from "axios";

import {IGenre, IGenrePage} from "../../../interfaces/genre.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../../services/genre.service";


interface IState {
    genres: IGenre[]
    genre: null
    pending:boolean

}

const initialState: IState = {
    genres: [],
    genre: null,
    pending:false
}

const getGenres = createAsyncThunk<IGenrePage<IGenre[]>, void>(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenre()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response)
        }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre: (state, action) => {
            console.log(action.payload.genre)
            state.genre = action.payload.genre
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
            })

})
const {actions, reducer: genreReducer} = genreSlice

const genreActions = {
    ...actions,
    getGenres
}
export {
    genreReducer,
    genreActions
}
