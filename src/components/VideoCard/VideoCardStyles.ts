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
      font-weight: bold;
    }
  }

  .video-card-loading {
    min-height: 180px;
    display: flex;
    margin: auto;
  }

  .download-option-section {
    font-size: 14px;
    margin: 8px 0px;
  }

  .options-container {
    display: flex;
    justify-content: space-between;
  }

  .select-field-container {
    width: 120px;
  }

  .select-field {
    width: 100%;
  }

  .action-button-section {
    margin: 8px 0px;
    margin-bottom: 0px;
    text-align: right;
  }
`;
