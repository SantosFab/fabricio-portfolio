export type ThemeType = "light" | "dark";

export interface Theme {
  title: ThemeType;
  fontSize: {
    h1: {
      fixed: string;
      responsive: string;
      fixedSmall: string;
    };
    h2: {
      fixed: string;
      responsive: string;
    };
    h3: {
      fixed: string;
    };
    p: {
      fixed: string;
      responsive: string;
    };
  };
  fontColors: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
  background: {
    layout: {
      dark: string;
      light: string;
    };
    container: {
      dark: string;
      light: string;
    };
  };
}
