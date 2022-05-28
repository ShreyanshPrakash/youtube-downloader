import "../styles/globals.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { PAGE_CONFIG } from "config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getPageTitle = () => {
    const pathname = router?.pathname;
    return PAGE_CONFIG[pathname]?.title;
  };

  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
