import { createBrowserRouter } from "react-router-dom";
import Login from "../../modules/auth/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    }
])