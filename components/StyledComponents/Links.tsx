import styled from "styled-components";

interface StyledNavLinkProps {
  readonly color?: string;
}
export const StyledNavLink = styled.div<StyledNavLinkProps>`
  margin: 4px 8px;
  font-size: 18px;
  color: ${(props) => props?.color || "inherit"};
`;
