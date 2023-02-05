import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const VideoCardWrapper = styled.div`
    border: 1px solid black;
    width: 240px;
    padding: 16px;

    .image-section {
        min-height: 120px;
        border: 1px solid black;
    }

    .body-section {
        .title-para {
            word-wrap: break-word;
        }
    }
`;

interface VideoDetails {

}

interface IProps {
    imageSrc?: string;
    imageAltText?: string;
    title?: string;
    videoUrl?: string;
    videoDetails: VideoDetails;
}

export const VideoCard: FC<IProps> = (props: IProps): ReactElement => {
    const { imageSrc, imageAltText, title, } = props;
    return(
        <VideoCardWrapper>
            <div className='image-section'>
                <img src={imageSrc} alt={imageAltText} />
            </div>
            <div className='body-section'>
                <p className='title-para'>{title}</p>
            </div>
            <div className='progress-section'>
                Progress
            </div>
            <div className='action-section'>
                buttons
            </div>
        </VideoCardWrapper>
    )
}