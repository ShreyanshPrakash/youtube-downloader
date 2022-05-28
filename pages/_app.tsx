import { AppProps } from "next/app";
import { CustomHead, NavigationHeader } from "components";
import { StyledAppContainer } from "components/StyledComponents";
import { GlobalStyle } from "styles";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledAppContainer className="app">
      <GlobalStyle />
      <CustomHead />
      <NavigationHeader />
      <Component {...pageProps} />
    </StyledAppContainer>
  );
}

export default MyApp;
