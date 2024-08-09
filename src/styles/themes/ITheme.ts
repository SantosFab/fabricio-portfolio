export type ThemeType = "light" | "dark";

export interface ITheme {
  title: ThemeType;
  fontSize: {
    titleFixed: string;
    titleResponse: string;
    subTitleFixed: string;
    subTitleResponse: string;
    paragraphFixed: string;
    paragraphResponse: string;
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
