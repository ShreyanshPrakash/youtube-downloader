import styled from "styled-components";

export const StyledAppContainer = styled.div``;

interface StyledContainerProps {
  readonly display?: string;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  align-items: center;
  padding: 0px;
  display: ${(props) => props?.display || "block"};
`;
