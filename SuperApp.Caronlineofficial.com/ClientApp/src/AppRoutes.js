import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import MashintoQuickAccess from "./components/MashintoQuickAcces";
import { Home } from "./Screens/Home.js";
import Shop from "./Screens/Shop";
import AmlaktoQuickAccess from "./components/AmlaktoQuickAccess";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from './Screens/Dashboard';

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/MashintoQuickAccess",
    element: <MashintoQuickAccess />,
  },
  {
    path: "/AmlaktoQuickAccess",
    element: <AmlaktoQuickAccess />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
];

export default AppRoutes;
