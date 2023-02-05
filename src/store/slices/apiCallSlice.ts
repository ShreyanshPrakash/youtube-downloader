import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  apiState: "SUCCESSFUl" | "FAILED" | "INPROGRESS" | "IDLE";
}

const initialState: InitialState = {
  apiState: "IDLE",
};

const reducers = {
  APICallInProgress: (state: InitialState, action: PayloadAction<String>) => {
    state.apiState = "INPROGRESS";
  },
  APICallSuccessful: (state: InitialState, action: PayloadAction<String>) => {
    state.apiState = "SUCCESSFUl";
  },
  APICallFailed: (state: InitialState, action: PayloadAction<String>) => {
    state.apiState = "FAILED";
  },
  APICallIdle: (state: InitialState, action: PayloadAction<String>) => {
    state.apiState = "IDLE";
  },
};

export const APICallSlice = createSlice({
  name: "apiCall",
  initialState,
  reducers,
});

export const {
    APICallFailed,
    APICallIdle,
    APICallInProgress,
    APICallSuccessful,
} = APICallSlice.actions;
