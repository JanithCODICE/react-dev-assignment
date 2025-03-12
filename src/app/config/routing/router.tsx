import { createBrowserRouter } from "react-router-dom";
import Login from "../../modules/auth/Login";
import MainLayout from "../../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../../layouts/AuthLayout";
import Dashboard from "../../modules/dashboard/Dashboard";
import Users from "../../modules/users/Users";
import Logout from "../../modules/auth/Logout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    },
    {
        path: "/logout",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Logout />
            }
        ]
    },
    {
        path: "",
        element: <ProtectedRoute> <AuthLayout/> </ProtectedRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/users",
                element: <Users/>
            }
        ]

    }
])