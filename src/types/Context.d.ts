import { ReactNode, Dispatch } from "react";

export type State = {
  layout: string;
  darkMode: boolean;
};

export type Action =
  | { type: "LAYOUT"; value: string }
  | { type: "DARKMODE"; value: boolean };

export type UIContextType = [State, Dispatch<Action>];

export interface UIControllerProviderProps {
  children: ReactNode;
}
