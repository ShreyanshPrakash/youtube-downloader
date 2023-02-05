import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  border-radius: 10px;
  width: 240px;
  padding: 16px;

  .image-section {
    min-height: 80px;

    img {
      width: 100%;
    }
  }

  .body-section {
    .title-text {
      word-wrap: break-word;
      font-size: 14px;
      margin: 4px 0px;
    }
  }

  .video-card-loading {
    min-height: 180px;
    display: flex;
    margin: auto;
  }
`;
