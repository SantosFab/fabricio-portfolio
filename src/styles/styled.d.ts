import "styled-components";
import { Theme } from "./themes/Theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
