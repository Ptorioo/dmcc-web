import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  Dispatch,
} from "react";
import PropTypes from "prop-types";
import {
  State,
  Action,
  UIContextType,
  UIControllerProviderProps,
} from "../types/Context";

const UIContext = createContext<UIContextType | undefined>(undefined);

UIContext.displayName = "UIContext";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action["type"]}`);
    }
  }
}

const initialState: State = {
  layout: "homepage",
  darkMode: false,
};

function UIControllerProvider({
  children,
}: UIControllerProviderProps): JSX.Element {
  const [controller, dispatch] = useReducer(reducer, initialState);

  const value: UIContextType = useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

function useUIController(): UIContextType {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error(
      "useUIController must be used within a UIControllerProvider"
    );
  }
  return context;
}

UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const setLayout = (dispatch: Dispatch<Action>, value: string): void =>
  dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch: Dispatch<Action>, value: boolean): void =>
  dispatch({ type: "DARKMODE", value });

export { UIControllerProvider, useUIController, setLayout, setDarkMode };
