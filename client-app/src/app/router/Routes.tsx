import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import HutbaDashboard from "../../features/hutbe/dashboard/HutbaDashboard";
import HutbaForm from "../../features/hutbe/form/HutbaForm";
    import HutbaDetails from "../../features/hutbe/details/HutbaDetails";
import VijestDashboard from "../../features/vijesti/dashboard/VijestDashboard";
import VijestForm from "../../features/vijesti/form/VijestForm";
import VijestDetails from "../../features/vijesti/details/VijestDetails";
import VijestCategory from "../../features/category/VijestCategory";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'hutbe', element: <HutbaDashboard />},
            {path: 'hutbe/:id', element: <HutbaDetails />},
            {path: 'kreiraj-hutbu', element: <HutbaForm key='kreiraj-hutbu'/>},
            {path: 'azuriraj-hutbu/:id', element: <HutbaForm key='azuriraj-hutbu'/>},
            {path: 'vijesti', element: <VijestDashboard />},
            {path: 'vijesti/:id', element: <VijestDetails />},
            {path: 'kreiraj-vijest', element: <VijestForm key='kreiraj-vijest'/>},
            {path: 'azuriraj-vijest/:id', element: <VijestForm key={'azuriraj-vijest'}/>},
            {path: 'vijesti/kategorija/:kategorija', element: <VijestCategory />},
        ]
    },
]

export const router = createBrowserRouter(routes);