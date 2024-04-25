import React from "react";
import { useEffect } from "react";
import {
  Link,
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
      new CustomEvent("[app-network] navigated", { detail: location.pathname })
    );
  }, [location]);

  return (
    <div>
      <li>
        <Link to={`/a`}>App Network Page A</Link>
      </li>
      <li>
        <Link to={`/b`}>App Network Page B</Link>
      </li>
      <Outlet />;
    </div>
  );
};

export const routes = [
  {
    path: "/",
    element: <RoutingManager />,
    children: [
      {
        index: true,
        element: <Navigate to={`/a`} />,
      },
      {
        path: "a",
        element: <div>App Network Page A</div>,
      },
      {
        path: "b",
        element: <div>App Network Page B</div>,
      },
    ],
  },
];
