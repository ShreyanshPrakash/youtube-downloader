import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IInitialState {

}

const InitialState: IInitialState = {};


const reducers = {
    addToDownloadQueue: (state: IInitialState, action: PayloadAction<any>) => {
        
    }
}



export const SearchSlice = createSlice({
    name: "SearchSlice",
    initialState: InitialState,
    reducers: reducers,
})