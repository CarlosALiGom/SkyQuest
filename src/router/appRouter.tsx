import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import SearchCityPage from "../pages/SearchCityPage/SearchCityPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} replace />,
      },
      { path: "/home", element: <SearchCityPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
