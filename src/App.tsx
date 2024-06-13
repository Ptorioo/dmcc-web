import { useUIController } from "./context";
import React, { useEffect, ReactElement } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import routes from "./routes";
import { Route as RouteType } from "./types/Route";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme/darkTheme";
import defaultTheme from "./theme/defaultTheme";

function App() {
  const [controller] = useUIController();
  const { layout, darkMode } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const getRoutes = (allRoutes: RouteType[]): ReactElement[] => {
    return allRoutes.flatMap((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route path={route.route} element={route.component} key={route.key} />
        );
      }

      return [];
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <CssBaseline enableColorScheme />
      <Routes>{getRoutes(routes)}</Routes>
    </ThemeProvider>
  );
}

export default App;
