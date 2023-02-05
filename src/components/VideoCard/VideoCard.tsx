import { VideoCardWrapper } from "components/VideoCard/VideoCardStyles";
import { useAppSelector } from "hooks";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { fetchVideoDetails, getVideoMap } from "store/slices";

interface IProps {
  url: string;
  index: number;
}
export const VideoCard: FC<IProps> = (props: IProps): ReactElement => {
  const { url, index } = props;

  const videoMap = useAppSelector(getVideoMap);
  const dispatch = useDispatch<AppDispatch>();

  const { fulltitle, thumbnail } = videoMap?.[url] || {};

  useEffect(() => {
    if (url) {
      dispatch(fetchVideoDetails(url));
    }
  }, [url]);

//   useEffect(() => {
//     console.log(videoMap?.[url]);
//   }, [videoMap]);

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
        </>
      ) : (
        <div className="video-card-loading">
            <span>Loading video info....</span>
        </div>
      )}
    </VideoCardWrapper>
  );
};
