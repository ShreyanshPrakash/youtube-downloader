import { AppProps } from "next/app";
import { CustomHead, NavigationHeader } from "components";
import { StyledAppContainer } from "components/StyledComponents";
import { GlobalStyle, YTDTheme } from "styles";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledAppContainer className="app">
      <ThemeProvider theme={YTDTheme}>
        <GlobalStyle />
        <CustomHead />
        <NavigationHeader />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledAppContainer>
  );
}

export default MyApp;
