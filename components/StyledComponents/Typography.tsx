import styled from "styled-components";

interface StyledTextProps {
  readonly color?: string;
  readonly fontsize?: string;
}
export const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => props?.color || "inherit"};
  font-size: ${(props) => props?.fontsize || "inherit"};
`;
