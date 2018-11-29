// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Registration from "views/Registration/Registration.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Объявления",
    navbarName: "Доска объявлений",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/registation",
    sidebarName: "Регистрация",
    navbarName: "Регистрация",
    icon: Person,
    component: Registration
  },
  {
    path: "/user",
    sidebarName: "Пчеловоды",
    navbarName: "Пчеловоды",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Публикации",
    navbarName: "Публикации",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/maps",
    sidebarName: "Карта",
    navbarName: "Карта",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/maps",
    sidebarName: "О проекте",
    navbarName: "О проекте",
    icon: LocationOn,
    component: Maps
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
