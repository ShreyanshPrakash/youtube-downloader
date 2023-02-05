import { SearchSectionWrapper } from "components/SearchSection/SearchSectionStyles";
import { useAppDispatch, useAppSelector } from "hooks";
import { SearchStateModel } from "./SearchSectionModels";
import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import {
  addToDownloadQueue,
  getDownloadQueue,
  getVideoMap,
} from "store/slices";
import styled, { useTheme } from "styled-components";
import { Button, SearchField, StyledContainer } from "uiLibrary";
import { isValidVideoUrl } from "utils";

interface Iprops {}
export const SearchSection: FC<Iprops> = (props: Iprops): ReactElement => {
  const videoMap = useAppSelector(getVideoMap);
  const [searchFieldState, setSearchFieldState] = useState<SearchStateModel>(
    new SearchStateModel()
  );
  const theme = useTheme();
  const dispatch = useAppDispatch();

  /*
      User event methods
    */
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event?.stopPropagation();
    const value = event?.target?.value;
    console.log(videoMap[value] !== undefined);
    setSearchFieldState({
      searchValue: value,
      isValidValue: isValidVideoUrl(value),
      isDuplicate: videoMap[value] !== undefined,
    });
  };

  const handleDownloadClick = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ): void => {
    event?.preventDefault?.();
    const { searchValue } = searchFieldState;
    if (videoMap[searchValue]) {
      return;
    }
    dispatch(addToDownloadQueue(searchFieldState?.searchValue));
    setSearchFieldState(new SearchStateModel());
  };

  /*
   */

  return (
    <SearchSectionWrapper>
      <StyledContainer className="search-section">
        <StyledContainer className="search-container" display="flex">
          <div className="search-input-field-container">
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
            <p className="helper-text">
              {
                searchFieldState.isDuplicate && 
                "Video with same link already exist in the queue!"
              }
            </p>
          </div>
          <Button
            label="Download"
            onClick={handleDownloadClick}
            disabled={
              !searchFieldState?.isValidValue || searchFieldState.isDuplicate
            }
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
