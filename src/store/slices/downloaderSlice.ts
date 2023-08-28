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

// class VideoMapModel {
//   userUrl: string;
//   videoDetails: {};
//   constructor(url: string) {
//     this.userUrl = url || "";
//     this.videoDetails = {};
//   }
// }

interface VideoMap {
  [key: string]: any;
}

interface DownloadInfoMap {
  [key: string]: any;
}

interface InitialState {
  url: String;
  data: any;
  downloadQueue: Array<string>;
  videoMap: VideoMap;
  downloadInfoMap: DownloadInfoMap;
}

const intialState: InitialState = {
  url: "",
  data: {},
  downloadQueue: [],
  videoMap: {},
  downloadInfoMap: {},
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
    // state.videoMap[String(payload)] = {
    //   ...new VideoMapModel(payload)
    // };
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
        const { meta, payload } = action;
        state.downloadInfoMap[meta?.arg] = payload;
      }
    )
    .addCase(
      downloadVideo?.rejected,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = {};
      }
    )
    .addCase(
      fetchVideoDetails?.pending,
      (state: InitialState, action: PayloadAction<any>) => {
        state.data = {};
      }
    )
    .addCase(
      fetchVideoDetails?.fulfilled,
      (state: InitialState, action: PayloadAction<any>) => {
        const { meta, payload } = action;
        state.videoMap[meta?.arg] = payload;
      }
    )
    .addCase(
      fetchVideoDetails?.rejected,
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

export const getDownloadInfoMap = (state: RootState) =>
  state.downloadVideoState.downloadInfoMap;

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
