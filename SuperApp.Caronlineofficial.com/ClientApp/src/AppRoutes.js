import MashintoQuickAccess from "./Screens/MashintoQuickAcces";
import AmlaktoQuickAccess from "./Screens/AmlaktoQuickAccess";
import { Home } from "./Screens/Home";
// import Shop from "./Screens/Shop";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from "./Screens/Dashboard";
// import VerifyScreen from "./Screens/VerifyScreen";
import CompleteProfile from "./Screens/CompleteProfile";
import ClinickAccess from "./Screens/ClinickAccess";
import Faq from "./Screens/Faq";
import AboutUs from "./Screens/AboutUs";
import Policy from "./Screens/Policy";
import ContactUs from "./Screens/ContactUs";
import ReportError from "./Screens/ReportError";
import Crypto from "./Screens/Crypto";
import CryptoSingle from "./Screens/CryptoSingle";
import Forex from "./Screens/Forex";
import Market from "./Screens/Market";
import Gold from "./Screens/Gold";
import Currency from "./Screens/Currency";
import RealEstate from "./Screens/RealEstate";
import CommodityExchange from "./Screens/CommodityExchange";
import NewsPaper from "./Screens/NewsPaper";
import DetailNews from "./Screens/DetailNews";
import ShopQuikAccess from "./Screens/ShopQuikAccess";
import CryptoQuickAccess from "./Screens/CryptoQuickAccess";
import News from "./Screens/News";
import Story from './Screens/Story';
import AdminDashboard from "./Screens/AdminPages/AdminDashboard";
import AddNewStory from './Screens/AdminPages/AddNewStory';
import ManageStory from './Screens/AdminPages/ManageStory';
import ResetPassword from './Screens/ResetPassword';
import VerifyResetPassword from './Screens/VerifyResetPassword';

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/فروشگاه",
    element: <ShopQuikAccess />,
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
    path: "/توسعه-کسب-و-کار",
    element: <ClinickAccess />,
  },
  {
    path: "/دیده-بان",
    element: <CryptoQuickAccess />,
  },
  {
    path: "/اخبار",
    element: <News />,
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
  // {
  //   path: "/Verify",
  //   element: <VerifyScreen />,
  // },
  {
    path: "/CompleteProfile",
    element: <CompleteProfile />,
  },
  {
    path: "/Crypto",
    element: <Crypto />,
  },
  {
    path: "/Crypto/:coin",
    element: <CryptoSingle />,
  },
  {
    path: "/Forex",
    element: <Forex />,
  },
  {
    path: "/Market",
    element: <Market />,
  },
  {
    path: "/Gold",
    element: <Gold />,
  },
  {
    path: "/Currency",
    element: <Currency />,
  },
  {
    path: "/RealEstate",
    element: <RealEstate />,
  },
  {
    path: "/CommodityExchange",
    element: <CommodityExchange />,
  },
  {
    path: "/NewsPaper",
    element: <NewsPaper />,
  },
  {
    path: "/News/:id",
    element: <DetailNews />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
  {
    path: "/About-Us",
    element: <AboutUs />,
  },
  {
    path: "/Contact-Us",
    element: <ContactUs />,
  },
  {
    path: "/Report-error",
    element: <ReportError />,
  },
  {
    path: "/Policy",
    element: <Policy />,
  },
  {
    path: "/Story",
    element: <Story />,
  },
  //admin route
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/AddNewStory",
    element: <AddNewStory />,
  },
  {
    path: "/ManageStory",
    element: <ManageStory />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/VerifyResetPassword",
    element: <VerifyResetPassword />,
  },

];

export default AppRoutes;
