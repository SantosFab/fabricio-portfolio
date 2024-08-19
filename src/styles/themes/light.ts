import { Theme } from "./Theme";
import { sharedValues } from "./sharedValues";

export const light: Theme = {
  title: "light",
  ...sharedValues,
  fontColors: {
    one: "#EDFDFF",
    two: "#E0FFF2",
    three: "#CCE8E4",
    four: "#2c3e50",
  },
  background: {
    layout: {
      dark: "#CCE8E4",
      light: "#E0FFF2",
    },
    container: {
      dark: "#E0EBFF",
      light: "#EDFDFF",
    },
  },
};
