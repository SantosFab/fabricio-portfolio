export type ThemeType = "light" | "dark";

export interface ITheme {
  title: ThemeType;
  fontSize: {
    title1: string;
    title2: string;
    title3: string;
    paragraph: string;
  };
  fontColors: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
  background: {
    color1: string;
    color2: string;
  };
}
