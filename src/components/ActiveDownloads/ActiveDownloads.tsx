import { useAppSelector } from "hooks";
import React, { FC } from "react";
import { getDownloadQueue } from "store/slices";
import styled from "styled-components";
import { DownloadCard } from "uiLibrary";


interface Iprops{}

const ActiveDownloadsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ActiveDownloads: FC<Iprops> = (props: Iprops) => {

  const downloadQueue = useAppSelector(getDownloadQueue);

    return (<ActiveDownloadsWrapper>
        {
          downloadQueue.map(item => {

            return <DownloadCard 
              title={item}
            />
          })
        }
        
    </ActiveDownloadsWrapper>)
}