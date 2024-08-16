import { Theme } from "./ITheme";
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
    color1: "#2E2D33",
    color2: "#484554",
    color3: "#0C0B0D",
  },
};
