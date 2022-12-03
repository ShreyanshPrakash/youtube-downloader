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
export const downloadVideo = createAsyncThunk(
  "download/downloadVideo",
  async (payload: string) => {
    const endpoint = ENDPOINTS?.downloadVideo;
    const response = await httpsService.post<String, any>(endpoint, {
      videoLink: payload,
    });

    return response.data;
  }
);

export const fetchVideoDetails = createAsyncThunk(
  "download/fetchVideoDetails",
  async (payload: string) => {
    const endpoint = ENDPOINTS?.downloadVideo;
    const response = await httpsService.post<String, any>(endpoint, {
      videoLink: payload,
    });

    return response.data;
  }
);

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
      downloadVideo?.pending,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = {};
      }
    )
    .addCase(
      downloadVideo?.fulfilled,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = action.payload;
      }
    )
    .addCase(
      downloadVideo?.rejected,
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
export const DownloadSlice = createSlice({
  name: "download",
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
} = DownloadSlice.actions;
