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
        borderRadius: "0",
        bgColor: "green.50",
        _focus: {
          bgColor: "green.50",
          borderColor: "accent.800",
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
    styles: {
      global: (props: any) => ({
        backgroundColor: mode("green.50", "accent.100")(props),
        body: {
          backgroundColor: "green.50",
        },
      }),
    },
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
      green: {
        50: "#233118",
        100: "#11180c",
      },
      secundary: {
        50: "#2D3748",
      },
    },
    fonts: {
      heading: `Montserrat,${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      // Heading: {
      //   variants: {
      //     head: {
      //       fontSize: {{ base: "18px", md: "24px", lg: "xl" }},
      //     },
      //   },
      // },
      Button: {
        variants: {
          green: (props: any) => ({
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
      Textarea: {
        variants: {
          filled: {
            _focus: {
              bgColor: "green.50",
              borderColor: "accent.800",
            },
            borderRadius: "0",
            field: {
              bgColor: "green.50",
            },
          },
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
