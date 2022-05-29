import styled from "styled-components";
import { YTDTheme } from "styles";

interface DividerProps {
  readonly color?: string;
  readonly margin?: string;
  readonly height?: string;
  readonly width?: string;
  readonly transform?: "vertical" | "horizontal";
}
export const Divider = styled.hr<DividerProps>`
  height: ${({height}) => height || "1px"};
  background-color: ${({color, theme}) => color || theme?.colors?.ytdGrey};
  margin: ${({margin}) => margin || "0px"};
  width: ${({width}) => width || "100%"};
  transform: ${({transform}) =>
    transform === "vertical" ? "rotate(90deg)" : "rotate(0deg)"};
`;
