import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { ActiveDownloads, Button, SearchField } from "components";
import { StyledContainer } from "components/StyledComponents";
import styled, { useTheme } from "styled-components";
import { addToDownloadQueue } from "store/slices";
import { useAppDispatch } from "hooks/storeHooks";
import { isValidVideoUrl } from "utils";
import { SearchStateModel } from "models";

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

const Home: FC<IHomeProps> = (): ReactElement => {
  const [searchFieldState, setSearchFieldState] = useState<SearchStateModel>(
    new SearchStateModel()
  );

  const theme = useTheme();

  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event?.stopPropagation();
    const value = event?.target?.value;
    setSearchFieldState({
      searchValue: value,
      isValidValue: isValidVideoUrl(value),
    });
  };

  const handleDownloadClick = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ): void => {
    event?.preventDefault?.();
    dispatch(addToDownloadQueue(searchFieldState?.searchValue));
    setSearchFieldState(new SearchStateModel());
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
            value={searchFieldState?.searchValue}
            onChange={handleSearchChange}
          />
          <Button
            label="Download"
            onClick={handleDownloadClick}
            disabled={!searchFieldState?.isValidValue}
            styles={{
              borderRadius: "8px",
              marginLeft: "16px",
            }}
          />
        </StyledContainer>
      </StyledContainer>
      <ActiveDownloads />
    </HomeWrapper>
  );
};

export default Home;
