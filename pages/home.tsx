import React, { ChangeEvent, FC, FormEvent, useRef, MouseEvent, useEffect, useState } from "react";
import { ActiveDownloads, Button, Form, SearchField } from "components";
import { Divider, StyledContainer } from "components/StyledComponents";
import { ENDPOINTS } from "config/endpoint.config";
import { httpsService } from "service";
import styled, { useTheme } from "styled-components";
// import { useSelector, useDispatch } from 'react-redux';
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
    dispatch(testStore(url));
    dispatch(downloadSelectedVideo(url));
    // downlodVideo(payload);
  };

  // const downlodVideo = (body: any) => {
    // const url = ENDPOINTS?.downloadVideo;
  //   httpsService
  //     .post(url, body)
  //     .then((res) => {
  //       console.log(res?.data);
  //       console.log(res.data?.description);
  //       console.log(res?.data?.formats[res?.data?.formats.length - 8]?.url);
  //       // console.log(res?.data?.split?.("\n"));
  //       return res;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <HomeWrapper>
      <StyledContainer className="download-section">
        <StyledContainer className="search-container" display="flex">
          <SearchField
            type="search"
            name="videoLink"
            width={theme?.formFieldSizes?.sizeXL}
            // ref={inputRef}
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
