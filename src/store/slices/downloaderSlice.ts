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

class VideoMapModel {
  userUrl: string;
  videoDetails: {};
  constructor(url: string) {
    this.userUrl = url || "";
    this.videoDetails = {};
  }
}

interface SupportedPlatforms {
  [key: string]: VideoMapModel;
}

interface InitialState {
  url: String;
  data: any;
  downloadQueue: Array<string>;
  videoMap: SupportedPlatforms;
}

const intialState: InitialState = {
  url: "",
  data: {},
  downloadQueue: [],
  videoMap: {},
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
    const endpoint = ENDPOINTS?.getVideoInfo;
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
  addToDownloadQueue: (state: InitialState, action: PayloadAction<string>) => {
    const { payload } = action;
    state.downloadQueue.unshift(payload);
    state.videoMap[String(payload)] = {
      ...new VideoMapModel(payload)
    };
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
export const getDownloadQueue = (state: RootState) =>
  state.downloadVideoState.downloadQueue;

  export const getVideoMap = (state: RootState) =>
  state.downloadVideoState.videoMap;
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
