import { useAppSelector } from "hooks";
import React, { FC } from "react";
import { getDownloadQueue } from "store/slices";
import styled from "styled-components";


interface Iprops{}

const ActiveDownloadsWrapper = styled.div``;

export const ActiveDownloads: FC<Iprops> = (props: Iprops) => {

  const downloadQueue = useAppSelector(getDownloadQueue);

    return (<ActiveDownloadsWrapper>
        Hello world
        
    </ActiveDownloadsWrapper>)
}