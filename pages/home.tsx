import React, { ChangeEvent, FC, FormEvent, useRef, MouseEvent, useEffect, useState } from "react";
import { ActiveDownloads, Button, Form, SearchField } from "components";
import { StyledContainer } from "components/StyledComponents";
import styled, { useTheme } from "styled-components";
import { downloadSelectedVideo, selectURL, testStore } from "store/slices";
import { RootState } from "store";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";

const HomeWrapper = styled.div`
  padding: 24px;
  .download-section {
    width: 60%;
    margin: auto;
    padding: 24px 0px;
    display: flex;

    .search-container {
      border: 4px solid ${({ theme }) => theme?.colors?.greenLight};
      padding: 24px;
      margin: auto;
    }
  }
  .info-section {
    border: 1px solid black;
  }
`;

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {

  const [searchValue, setSearchValue] = useState<string>("");

  const theme = useTheme();

  const downloadVideoState = useAppSelector(selectURL);
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event?.stopPropagation();
    setSearchValue(event?.target?.value || "");
  }

  const handleDownloadClick = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => {
    event?.preventDefault?.();
    const url = searchValue;

    console.log(url);
    // dispatch(testStore(url));
    // dispatch(downloadSelectedVideo(url));
  };

  return (
    <HomeWrapper>
      <StyledContainer className="download-section">
        <StyledContainer className="search-container" display="flex">
          <SearchField
            type="search"
            name="videoLink"
            width={theme?.formFieldSizes?.sizeXL}
            styles={{
              borderRadius: "4px",
            }}
            onChange={handleSearchChange}
          />
          <Button
            label="Download"
            onClick={handleDownloadClick}
            disabled={!searchValue}
            styles={{
              borderRadius: "8px",
              marginLeft: "16px",
            }}
          />
          {/* <Button label="Download" onClick={handleDownloadClick}/> */}
        </StyledContainer>
      </StyledContainer>
      <ActiveDownloads />
    </HomeWrapper>
  );
};

export default Home;
