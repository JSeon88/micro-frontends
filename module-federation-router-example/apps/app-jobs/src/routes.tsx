import React from "react";
import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom";

/** app-shell 과 연결하는 라우팅 매니저 */
const RoutingManager = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /** app-shell 이 바꼈을 때 */
  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      if (
        location.pathname === pathname ||
        !matchRoutes(routes, { pathname })
      ) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener("[app-shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener(
        "[app-shell] navigated",
        shellNavigationHandler
      );
    };
  }, [location]);

  /** location 이 변경될 때마다 이벤트 발생 */
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[app-jobs] navigated", { detail: location.pathname })
    );
  }, [location]);

  return <Outlet />;
};

export const routes = [
  {
    path: "/",
    element: <RoutingManager />,
    children: [
      {
        index: true,
        element: <Navigate to={`/1`} />,
      },
      {
        path: "1",
        element: <div>App Jobs Page 1</div>,
      },
      {
        path: "2",
        element: <div>App Jobs Page 2</div>,
      },
    ],
  },
];
