import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  border-radius: 10px;
  width: 240px;
  padding: 8px;
  border: 2px solid darkblue;

  .image-section {
    min-height: 80px;

    img {
      width: 100%;
      word-break: break-word;
    }
  }

  .body-section {
    .title-text {
      word-wrap: break-word;
      font-size: 14px;
      margin: 4px 0px;
      font-weight: bold;
    }
  }

  .video-card-loading {
    min-height: 180px;
    display: flex;
    margin: auto;
  }

  .action-button-section {
    margin: 8px 0px;
    margin-bottom: 0px;
    text-align: right;
  }
`;

export const DownloadOptionSectionStyled = styled.div`
  font-size: 14px;
  margin: 8px 0px;

  .options-container {
    display: flex;
    justify-content: space-between;
  }

  .select-field-container {
    width: 140px;
  }

  .select-field {
    width: 100%;
  }
`;
