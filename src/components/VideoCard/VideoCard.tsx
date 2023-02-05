import { VideoCardWrapper } from "components/VideoCard/VideoCardStyles";
import { useAppSelector } from "hooks";
import { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { downloadVideo, fetchVideoDetails, getVideoMap } from "store/slices";
import { Button } from "uiLibrary";

class DownloadOptionsModel {
  videoOptions: Array<any>;
  audioOptions: Array<any>;
  constructor() {
    this.videoOptions = [];
    this.audioOptions = [];
  }
}
interface IProps {
  url: string;
  index: number;
}
export const VideoCard: FC<IProps> = (props: IProps): ReactElement => {
  const { url, index } = props;

  const [downlodOptions, setDownloadOptions] = useState<DownloadOptionsModel>(
    new DownloadOptionsModel()
  );

  const videoMap = useAppSelector(getVideoMap);
  const dispatch = useDispatch<AppDispatch>();

  const { fulltitle, thumbnail } = videoMap?.[url] || {};

  useEffect(() => {
    if (url) {
      dispatch(fetchVideoDetails(url));
    }
  }, [url]);

  useEffect(() => {
    if (!videoMap?.[url]?.formats) {
      return;
    }

    let audioFormats = [];
    let videoFormats = [];

    for (let item of videoMap?.[url]?.formats) {
      const { width, height, format_note } = item;
      if (format_note === "storyboard") {
        continue;
      }
      if (width && height) {
        videoFormats.push(item);
      } else {
        audioFormats.push(item);
      }
    }

    setDownloadOptions({
      videoOptions: videoFormats,
      audioOptions: audioFormats,
    });

    // console.log(videoMap?.[url]?.formats);
    // console.log(audioFormats);
    // console.log(videoFormats);
  }, [videoMap]);

  const handleDownloadClick = () => {
    dispatch(downloadVideo(url));
  };

  return (
    <VideoCardWrapper className="box-shadow-light-gray">
      {videoMap?.[url] ? (
        <>
          <div className="image-section">
            <img src={thumbnail} alt={fulltitle || url} />
          </div>
          <div className="body-section">
            <p className="title-text">
              {index + 1}. {fulltitle || url}
            </p>
          </div>
          <div className="download-option-section">
            <div className="video-option-container options-container">
              <span>Video : </span>
              <div className="select-field-container">
                <select className="select-field">
                  <option key="best" value="best">
                    Best
                  </option>
                  {downlodOptions.videoOptions.map(
                    (option: any, index: number) => {
                      const { video_ext, url, resolution } = option;
                      return (
                        <option key={index} value={video_ext}>
                          {`${resolution} : ${video_ext}`}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
            <div className="audio-option-container options-container">
              <span>Audio : </span>
              <div className="select-field-container">
                <select className="select-field">
                  <option key="best" value="best">
                    Best
                  </option>
                  {downlodOptions.audioOptions.map(
                    (option: any, index: number) => {
                      const { audio_ext, url, format_note } = option;
                      return (
                        <option key={index} value={audio_ext}>
                          {`${format_note} : ${audio_ext}`}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className="action-button-section">
            <Button
              onClick={handleDownloadClick}
              label="Download"
              styles={{
                fontSize: "12px",
                padding: "6px 14px",
                borderRadius: "14px",
              }}
            />
          </div>
        </>
      ) : (
        <div className="video-card-loading">
          <span>Loading video info....</span>
        </div>
      )}
    </VideoCardWrapper>
  );
};
