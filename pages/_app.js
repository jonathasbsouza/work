import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/700.css";

import "../styles/global.css";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
