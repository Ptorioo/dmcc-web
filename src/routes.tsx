import HomeIcon from "@mui/icons-material/Home";
import Homepage from "./layouts/Homepage";
import { Route } from "./types/Route";

const routes: Route[] = [
  {
    type: "collapse",
    name: "Homepage",
    key: "homepage",
    icon: <HomeIcon />,
    route: "/",
    component: <Homepage />,
  },
];

export default routes;
