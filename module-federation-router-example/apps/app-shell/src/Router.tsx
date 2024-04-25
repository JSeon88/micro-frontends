import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { APP_JOBS_PREFIX, APP_NETWORK_PREFIX } from "./constants/prefix";

const AppJobsLazy = React.lazy(() => import("./components/AppJobs"));
const AppNetworkLazy = React.lazy(() => import("./components/AppNetwork"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${APP_JOBS_PREFIX}`} />,
      },
      {
        path: `/${APP_JOBS_PREFIX}/*`,
        element: (
          <Suspense fallback="Loading AppJobs...">
            <AppJobsLazy />
          </Suspense>
        ),
      },
      {
        path: `/${APP_NETWORK_PREFIX}/*`,
        element: (
          <Suspense fallback="Loading AppNetwork...">
            <AppNetworkLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
