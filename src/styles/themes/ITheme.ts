export type ThemeType = "light" | "dark";

export interface ITheme {
  title: ThemeType;
  colors: {
    primary: string;
    secondary: string;
  };
  background: {
    foreground_rgb: string;
    background_start_rgb: string;
    background_end_rgb: string;
  };
}
