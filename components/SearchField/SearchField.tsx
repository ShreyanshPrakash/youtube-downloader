import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SearchFieldWrapperProps {
  readonly fullWidth?: boolean;
  readonly width?: string;
  styles?: any;
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
    ${(props) => ({ ...props?.styles })}

    &::placeholder {
      font-size: 18px;
    }
  }
`;

interface SearchFieldProps extends SearchFieldWrapperProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  ref?: any;
  value?: string;
  placeholder?: string;
}
export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (props: SearchFieldProps, ref) => {
    const {
      type = "text",
      onChange,
      name = "input-field",
      value,
      placeholder = "Enter Video Link",
    } = props;

    return (
      <SearchFieldWrapper {...props}>
        <input
          className="search-field"
          placeholder={placeholder}
          name={name}
          type={type}
          ref={ref}
          onChange={onChange}
          autoComplete="off"
          value={value}
        />
      </SearchFieldWrapper>
    );
  }
);

export const InputField = SearchField;
