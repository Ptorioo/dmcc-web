import { ReactElement } from "react";

export interface Route {
  type: "collapse";
  name: string;
  key: string;
  icon: ReactElement;
  route: string;
  component: ReactElement;
  collapse?: Route[];
}
