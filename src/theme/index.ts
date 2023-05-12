import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { generateKey } from "crypto";
const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "accent",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};
const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "accent.500",
  },
};
const theme = extendTheme(
  {
    colors: {
      accent: {
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
      primary: {
        50: "#233118",
      },
    },
    fonts: {
      heading: `Montserrat,${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: "none",
            ...brandRing,
            color: mode("white", "gray.700")(props),
            backgroundColor: mode("accent.500", "accent.200")(props),
            _hover: {
              backgroundColor: mode("accent.600", "accent.300")(props),
            },
            _active: {
              backgroundColor: mode("accent.700", "accent.400"),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "accent",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);
export default theme;
