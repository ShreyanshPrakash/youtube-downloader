import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
  AsyncThunkAction,
} from "@reduxjs/toolkit";
import { ENDPOINTS } from "config/endpoint.config";
import { httpsService } from "service";
import { RootState } from "store/store";

/*
    Initial State
*/
interface InitialState {
  url: String;
  data: any;
}

const intialState: InitialState = {
  url: "",
  data: {},
};

/*
    Async Actions
*/
export const downloadSelectedVideo = createAsyncThunk
// <
// AsyncThunkAction<any, any, any>
// >
("downloadVideo/downloadSelectedVideo", async (payload: string) => {
    const endpoint = ENDPOINTS?.downloadVideo;
  const response = await httpsService.post<String, any>(
    endpoint,
    {
        videoLink: payload
    }
  );

  return response.data;
});

/*
 */

/*
    Reducers
*/

const reducers = {
  downloadApiInProgress: (state: InitialState, action: PayloadAction<any>) => {
    return state;
  },
  downloadApiSuccesful: (state: InitialState, action: PayloadAction<any>) => {
    return state;
  },
  downloadApiFailed: (state: InitialState, action: PayloadAction<any>) => {
    return state;
  },
  testStore: (state: InitialState, action: PayloadAction<any>) => {
    state.url = action.payload;
  },
};

/*
 */

/*
    Extra Reducers
*/

const extraReducers = (builder: ActionReducerMapBuilder<InitialState>) => {
  builder
    .addCase(
      downloadSelectedVideo?.pending,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = {};
      }
    )
    .addCase(
      downloadSelectedVideo?.fulfilled,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = action.payload;
      }
    )
    .addCase(
      downloadSelectedVideo?.rejected,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = {};
      }
    );
};

/*
 */

/*
    Selectors
*/
export const selectURL = (state: RootState) => state.downloadVideoState.url;
/*
 */

/*
    Splice
*/
export const DownloadVideoSlice = createSlice({
  name: "downloadVideo",
  initialState: intialState,
  reducers: reducers,
  extraReducers: extraReducers,
});

// Exporting all actions
export const {
  downloadApiInProgress,
  downloadApiSuccesful,
  downloadApiFailed,
  testStore,
} = DownloadVideoSlice.actions;
