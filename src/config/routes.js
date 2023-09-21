import Login from "../pages/login";
import AdminDashboard from "../pages/dashboard/admin_dashboard";

import { redirect } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <AdminDashboard />,
        // errorElement: <ErrorPage />,
        loader: () => {
            const isLoggedIn = store.getState().auth.isLoggedIn;

            // if is electron and is not logged in, redirect to login page
            if (!isLoggedIn) {
                return redirect("/login");
            }
            return null;
        }
    }
]