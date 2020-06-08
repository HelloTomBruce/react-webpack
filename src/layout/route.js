import Loadable from "react-loadable";
import Load from "@/component/Load";

const Home = Loadable({
    loader:  () => import("@/page/home"),
    loading: Load
});

const Login = Loadable({
    loader:  () => import("@/page/login"),
    loading: Load
});
const Logout = Loadable({
    loader:  () => import("@/page/logout"),
    loading: Load
});
const User = Loadable({
    loader:  () => import("@/page/user"),
    loading: Load
});

const AppRoute = [
    {
        path:      "/",
        component: Home,
        exact:     true,
        title:     "Home"
    },
    {
        path:      "/login",
        component: Login,
        exact:     true,
        title:     "Login"
    },
    {
        path:      "/logout",
        component: Logout,
        exact:     true,
        title:     "Logout"
    },
    {
        path:      "/user/:id",
        component: User,
        exact:     false,
        title:     "User"
    }
];

export default AppRoute;
