import { useAppSelector } from "hooks";
import React, { FC } from "react";
import { getDownloadQueue, getVideoMap } from "store/slices";
import styled from "styled-components";
import { VideoCard } from "uiLibrary";


interface Iprops{}

const ActiveDownloadsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ActiveDownloads: FC<Iprops> = (props: Iprops) => {

  const downloadQueue = useAppSelector(getDownloadQueue);
  const videoMap = useAppSelector(getVideoMap);

    return (<ActiveDownloadsWrapper>
        {
          downloadQueue.map(item => {

            return <VideoCard key={item}
              title={item}
              videoDetails={videoMap[item]}
            />
          })
        }
        
    </ActiveDownloadsWrapper>)
}