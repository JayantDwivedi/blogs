import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import theme from "@/utils/mui-theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}
