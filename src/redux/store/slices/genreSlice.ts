import {IGenre} from "../../../interfaces/genre.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../../services/genre.service";
import {AxiosError} from "axios";

interface IState {
    genres:IGenre[]
    genre:null

}

const initialState: IState = {
    genres: [],
    genre:null
}

const getGenres = createAsyncThunk<IGenre[],void>(
    'genreSlice/getGenres',
    async (_,{rejectWithValue})=>{
       try {
           const {data} = await genreService.getGenre()
           return data
       }catch (e){
           const err = e as AxiosError
           return rejectWithValue(err.response)
       }
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenre: (state, action)=>{
            console.log(action.payload.genre)
            state.genre = action.payload.genre
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled,(state, action)=>{
                state.genres = Object.values(action.payload)
            })

})
const {actions, reducer:genreReducer} = genreSlice

const genreActions ={
    ...actions,
    getGenres
}
export {
    genreReducer,
    genreActions
}
