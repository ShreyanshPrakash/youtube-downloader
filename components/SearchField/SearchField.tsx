import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SearchFieldWrapperProps {
  readonly fullWidth?: boolean;
  readonly width?: string;
}
const SearchFieldWrapper = styled.div<SearchFieldWrapperProps>`
  .search-field {
    width: ${({ width, fullWidth, theme }) =>
      width ? width : fullWidth ? "100%" : theme?.formFieldSizes?.default};
    height: 40px;
    outline: none;
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid grey;
    font-size: ${({ theme }) => theme?.fontSizes?.default};

    &::placeholder {
      font-size: 18px;
    }
  }
`;

interface SearchFieldProps extends SearchFieldWrapperProps {
  onChange?: (
    event: ChangeEvent<HTMLInputElement>
  ) => ChangeEvent<HTMLInputElement>;
  type?: string;
  name?: string;
}
export const SearchField: FC<SearchFieldProps> = (props) => {
  const { type = "text", onChange, name } = props;
  return (
    <SearchFieldWrapper {...props}>
      <input
        className="search-field"
        placeholder="Enter video link"
        name={name || "input-field"}
        type={type}
        onChange={onChange}
      />
    </SearchFieldWrapper>
  );
};
