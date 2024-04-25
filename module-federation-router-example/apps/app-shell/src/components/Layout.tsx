import React from "react";
import { Link, Outlet } from "react-router-dom";
import { APP_JOBS_PREFIX, APP_NETWORK_PREFIX } from "../constants/prefix";

const Layout = () => (
  <div>
    <nav>
      <li>
        <Link to={`/${APP_JOBS_PREFIX}/1`}>App Jobs Page 1</Link>
      </li>
      <li>
        <Link to={`/${APP_JOBS_PREFIX}/2`}>App Jobs Page 2</Link>
      </li>
      <li>
        <Link to={`/${APP_NETWORK_PREFIX}/a`}>App Network Page A</Link>
      </li>
      <li>
        <Link to={`/${APP_NETWORK_PREFIX}/b`}>App Network Page B</Link>
      </li>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
