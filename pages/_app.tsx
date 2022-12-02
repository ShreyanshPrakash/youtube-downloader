import { AppProps } from "next/app";
import { CustomHead, NavigationHeader } from "components";
import { StyledAppContainer } from "components/StyledComponents";
import { GlobalStyle, YTDTheme } from "styles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledAppContainer className="app">
        <ThemeProvider theme={YTDTheme}>
          <GlobalStyle />
          <CustomHead />
          <NavigationHeader />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledAppContainer>
    </Provider>
  );
}

export default MyApp;
