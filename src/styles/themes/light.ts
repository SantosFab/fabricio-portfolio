import { ITheme } from "./ITheme";
import { sharedValues } from "./sharedValues";

export const light: ITheme = {
  title: "light",
  ...sharedValues,
  fontColors: {
    one: "#EDFDFF",
    two: "#E0FFF2",
    three: "#CCE8E4",
    four: "#2c3e50",
  },
  background: {
    color1: "#EDFDFF",
    color2: "#E0FFF2",
    color3: "#CCE8E4",
  },
};
