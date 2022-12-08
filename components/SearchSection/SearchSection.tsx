import { useAppDispatch, useAppSelector } from "hooks";
import { SearchStateModel } from "models";
import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { addToDownloadQueue, downloadVideo, fetchVideoDetails, getDownloadQueue } from "store/slices";
import styled, { useTheme } from "styled-components";
import { Button, SearchField, StyledContainer } from "uiLibrary";
import { isValidVideoUrl } from "utils";

interface Iprops {}

const SearchSectionWrapper = styled.div`
margin-bottom: 24px;
  .search-section {
    /* width: 60%; */
    margin: auto;
    padding: 24px 0px;
    display: flex;

    .search-container {
      border: 4px solid ${({ theme }) => theme?.colors?.greenLight};
      padding: 24px;
      margin: auto;
    }
  }
`;

export const SearchSection: FC<Iprops> = (props: Iprops): ReactElement => {
  const downloadQueue = useAppSelector(getDownloadQueue);
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
    // dispatch(downloadVideo(searchFieldState?.searchValue));
    dispatch(fetchVideoDetails(searchFieldState?.searchValue));
    setSearchFieldState(new SearchStateModel());
  };

  return (
    <SearchSectionWrapper>
      <StyledContainer className="search-section">
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
    </SearchSectionWrapper>
  );
};
