import { FC, ReactElement } from "react";
import { getFormatedFileSize } from "utils";

interface IVideoFormatsProps {
  videoOptions: Array<VideoOptions>;
}

type VideoOptions = {
  video_ext: string;
  url: string;
  resolution: string;
  width: string;
  filesize: number;
};

export const VideoFormatsOptions: FC<IVideoFormatsProps> = (
  props: IVideoFormatsProps
): ReactElement => {
  const { videoOptions } = props;
  return (
    <>
      <div className="video-option-container options-container">
        <span>Video : </span>
        <div className="select-field-container">
          <select className="select-field">
            <option key="best" value="best">
              Best
            </option>
            {videoOptions.map((option: VideoOptions, index: number) => {
              const { video_ext, url, resolution, width, filesize } = option;
              return (
                <option key={index} value={String(width)}>
                  {`${resolution} : ${video_ext} : ${getFormatedFileSize(
                    filesize,
                    "MB"
                  )} MB`}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

/*
    AudioFormatsOptions Component
*/
interface IAudioFormatsProps {
  audioOptions: Array<AudioOptions>;
}

type AudioOptions = {
  audio_ext: string;
  url: string;
  format_note: string;
  filesize: number;
};

export const AudioFormatsOptions: FC<IAudioFormatsProps> = (
  props: IAudioFormatsProps
): ReactElement => {
  const { audioOptions } = props;
  return (
    <>
      <div className="audio-option-container options-container">
        <span>Audio : </span>
        <div className="select-field-container">
          <select className="select-field">
            <option key="best" value="best">
              Best
            </option>
            {audioOptions.map((option: AudioOptions, index: number) => {
              const { audio_ext, url, format_note, filesize } = option;
              return (
                <option key={index} value={audio_ext}>
                  {`${format_note} : ${audio_ext} : ${getFormatedFileSize(
                    filesize,
                    "MB"
                  )} MB`}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};
