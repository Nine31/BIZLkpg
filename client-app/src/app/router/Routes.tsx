import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import HutbaDashboard from "../../features/hutbe/dashboard/HutbaDashboard";
import HutbaForm from "../../features/hutbe/form/HutbaForm";
import HutbaDetails from "../../features/hutbe/details/HutbaDetails";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'hutbe', element: <HutbaDashboard />},
            {path: 'hutbe/:id', element: <HutbaDetails />},
            {path: 'kreiraj-hutbu', element: <HutbaForm key='kreiraj'/>},
            {path: 'azuriraj-hutbu/:id', element: <HutbaForm key='azuriraj'/>},
        ]
    },
]

export const router = createBrowserRouter(routes);