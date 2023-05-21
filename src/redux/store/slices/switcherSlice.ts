import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isDark: boolean
}

const initialState: IState = {
    isDark: false
}

const switcherSlice = createSlice({
    name: 'switcherSlice',
    initialState,
    reducers: {
        setMode: (state) => {
            state.isDark = !state.isDark
        }
    }

})

const {reducer: switchReducer, actions} = switcherSlice
const switchAction = {
    ...actions
}

export {
    switchAction,
    switchReducer
}