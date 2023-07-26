import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import MashintoQuickAccess from "./Screens/MashintoQuickAcces";
import AmlaktoQuickAccess from "./Screens/AmlaktoQuickAccess";
import { Home } from "./Screens/Home";
import Shop from "./Screens/Shop";
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
