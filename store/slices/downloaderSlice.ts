import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
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
  downloadQueue: Array<string>;
}

const intialState: InitialState = {
  url: "",
  data: {},
  downloadQueue: [],
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
  addToDownloadQueue: (state: InitialState, action: PayloadAction<any>) => {
    state.downloadQueue.push(action.payload);
  },
  downloadApiSuccesful: (state: InitialState, action: PayloadAction<any>) => {
    state;
  },
  downloadApiFailed: (state: InitialState, action: PayloadAction<any>) => {
    state;
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
// export const selectURL = (state: RootState) => state.downloadVideoState.url;
export const getDownloadQueue = (state: RootState) =>
  state.downloadVideoState.downloadQueue;
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
export const { addToDownloadQueue, downloadApiSuccesful, downloadApiFailed } =
  DownloadSlice.actions;
