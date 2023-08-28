import { AudioFormatsOptions, VideoFormatsOptions } from "components/VideoCard/HelperComponents";
import { VideoCardWrapper, DownloadOptionSectionStyled } from "components/VideoCard/VideoCardStyles";
import { handleDownloadInfoMap, handleVideoMap } from "components/VideoCard/VideoCardUtils";
import { useAppSelector } from "hooks";
import { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { downloadVideo, fetchVideoDetails, getDownloadInfoMap, getDownloadQueue, getVideoMap } from "store/slices";
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
  const downloadInfoMap = useAppSelector(getDownloadInfoMap);
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
    const { audioFormats, videoFormats } = handleVideoMap(videoMap, url);
    setDownloadOptions({
      videoOptions: videoFormats,
      audioOptions: audioFormats,
    });

  }, [videoMap]);

  useEffect(() => handleDownloadInfoMap(downloadInfoMap), [downloadInfoMap]);

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
          <DownloadOptionSectionStyled className="download-option-section">
            <VideoFormatsOptions 
              videoOptions={downlodOptions.videoOptions}
            />
            <AudioFormatsOptions 
              audioOptions={downlodOptions.audioOptions}
            />
          </DownloadOptionSectionStyled>
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
