/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import { wrapper } from "../store";
import React from "react";
import { useRouter } from "next/router";
import { token } from "../store/utils/axiosInstance";
import { Analytics } from '@vercel/analytics/react'

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#050F3F",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #8080805e",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiButton: {
      variants: [],
    },
  },
  palette: {
    primary: {
      main: "#FF0093",
    },
  },
});

const Header = () => {
  return (
    <Head>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, shrink-to-fit=no, minimal-ui"
      />
      <meta property="og:url" content="https://stocks.valyoux.io" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Valyouxmusic" />
      <meta
        property="og:description"
        content="The World's First Music Artist Stock Market Powered by Blockchain Technology"
      />
      <meta
        property="og:image"
        content="https://stocks.valyoux.io/public/assets/images/valyou_x_black_logo.svg"
      />
      <title>Valyou X</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <link
        rel="shortcut icon"
        href="https://stocks.valyoux.io/public/assets/images/valyou_x_emblem.svg"
      />
    </Head>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const router = useRouter();
  
  React.useEffect(() => {
    setPageLoaded(true);
    localStorage.setItem("userProfile", "Artist");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      {pageLoaded ? <Component {...pageProps} /> : null}
      <Analytics />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
