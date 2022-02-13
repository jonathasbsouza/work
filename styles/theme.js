import { extendTheme } from "@chakra-ui/react";

const palette = {
  fauxblack: "#454346",
  lightBeige: "#F8F4EF",
  white: "#fff",
  darkfauxblack: "#373438",
};

const theme = extendTheme({
  colors: {
    fauxblack: palette.fauxblack,
    lightBeige: "#F8F4EF",
    white: "#fff",
  },
  fonts: {
    heading: "Fraunces",
    body: "Public Sans",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Fraunces",
      },
      variants: {
        solid: (props) => ({
          borderRadius: 4,
          bg: palette.fauxblack,
          color: palette.white,
          _hover: {
            bg: palette.darkfauxblack,
          },
        }),
      },
    },
  },
});

export default theme;
