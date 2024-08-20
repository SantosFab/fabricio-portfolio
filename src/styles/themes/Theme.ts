export type ThemeType = "light" | "dark";

export interface Theme {
  title: ThemeType;
  fontSize: {
    h1: {
      fixed: string;
      responsive: string;
      smFixed: string;
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
    card: {
      title: string;
      lgTitle: string;
      tag: string;
      body: string;
      lgBody: string;
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
