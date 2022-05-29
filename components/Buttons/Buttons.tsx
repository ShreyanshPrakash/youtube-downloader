import React, { FC, MouseEvent, MouseEventHandler } from "react";
import styled from "styled-components";
import { IYTDTheme } from "styles";

interface IButtonWrapperProps {
  theme: IYTDTheme;
}
const ButtonWrapper = styled.button<IButtonWrapperProps>`
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme?.colors?.blueMedium};
  color: white;
  border: 1px solid ${({ theme }) => theme?.colors?.ytdGrey};
  font-size: ${({ theme }) => theme?.fontSizes?.default};
`;

interface IButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
}
export const Button: FC<IButtonProps> = (props) => {
  const { label, onClick } = props;
  return (
    <ButtonWrapper
      {...props}
    //   onClick={(event: MouseEvent<HTMLButtonElement>) => onClick?.(event)}
    onClick={onClick}
    >
      {label}
    </ButtonWrapper>
  );
};
