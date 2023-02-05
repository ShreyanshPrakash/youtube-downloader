import React, { FC, MouseEvent, ReactNode } from "react";
import styled from "styled-components";
import { IYTDTheme } from "styles";

interface IButtonWrapperProps {
  theme?: IYTDTheme;
  styles?: any;
}
const ButtonWrapper = styled.button<IButtonWrapperProps>`
  padding: 10px 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme?.colors?.blueMedium};
  color: white;
  border: 1px solid ${({ theme }) => theme?.colors?.ytdGrey};
  font-size: ${({ theme }) => theme?.fontSizes?.default};
  ${props => ({...props?.styles})}

  &&:disabled {
    background-color: #e6dddd;
  }
`;

interface IButtonProps extends IButtonWrapperProps {
  label: string;
  name?: string;
  value?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  children?: ReactNode;
  disabled?: boolean;
}
export const Button: FC<IButtonProps> = (props) => {
  const { label, onClick } = props;
  return (
    <ButtonWrapper {...props} onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};
