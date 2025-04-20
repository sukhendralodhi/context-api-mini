import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: '/profile',
        element: <Profile />
    }

]);


export default router;