import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import MashintoQuickAccess from "./components/MashintoQuickAcces";
import { Home } from "./Screens/Home.js";
import Shop from "./Screens/Shop";
import AmlaktoQuickAccess from "./components/AmlaktoQuickAccess";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from './Screens/Dashboard';
import VerifyScreen from './Screens/VerifyScreen';
import CompleteProfile from "./Screens/CompleteProfile";
import ClinickAccess from "./Screens/ClinickAccess";

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
    path: "/خودرو",
    element: <MashintoQuickAccess />,
  },
  {
    path: "/املاک",
    element: <AmlaktoQuickAccess />,
  },
  {
    path: "/کلینیک-کسب-و-کار",
    element: <ClinickAccess />,
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
  {
    path: "/Verify",
    element: <VerifyScreen />,
  },
  {
    path: "/CompleteProfile",
    element: <CompleteProfile />,
  },
];

export default AppRoutes;
