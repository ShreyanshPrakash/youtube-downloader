import styled from "styled-components";

export const StyledAppContainer = styled.div`
  // so that App container takes up the whole page height
  height: 100%;
`;

interface StyledContainerProps {
  readonly display?: string;
}
export const StyledContainer = styled.div<StyledContainerProps>`
  align-items: center;
  padding: 0px;
  display: ${(props) => props?.display || "block"};
`;
