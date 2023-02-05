interface ISizes{
    readonly sizeXS? : string;
    readonly sizeS? : string;
    readonly default? : string;
    readonly sizeM? : string;
    readonly sizeL? : string;
    readonly sizeXL? : string;
    readonly sizeXXL? : string;
}

const colors = {
  ytdGrey: "#e6dddd",
  greenLight: "#1ed21e",
  blueMedium: "#3333fc",
  blueHMedium: "#5353d7",
};

const fontSizes: ISizes = {
  sizeXS: "12px",
  sizeS: "16px",
  default: "18px",
  sizeM: "18px",
  sizeL: "20px",
  sizeXL: "24px",
  sizeXXL: "32px",
};


const formFieldSizes: ISizes = {
    default: "240px",
    sizeL: "320px",
    sizeXL: "480px",
    sizeXXL: "560px",
}

export interface IYTDTheme{
    readonly colors? : any;
    readonly fontSizes? : ISizes;
    readonly formFieldSizes? : ISizes;
}
export const YTDTheme: IYTDTheme = {
  colors,
  fontSizes,
  formFieldSizes,
};

// to get suggestion
type Theme = typeof YTDTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 
