import { Theme } from "./Theme";
import { sharedValues } from "./sharedValues";

export const dark: Theme = {
  title: "dark",
  ...sharedValues,
  fontColors: {
    one: "#8B8899",
    two: "#514F59",
    three: "#484554",
    four: " #f2f2f2",
  },
  background: {
    layout: {
      dark: "#0C0B0D",
      light: "#2E2D33",
    },
    container: {
      dark: "#484554",
      light: "#514F59",
    },
  },
};
