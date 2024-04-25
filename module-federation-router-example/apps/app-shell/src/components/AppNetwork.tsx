import React, { useEffect, useRef } from "react";
import { inject } from "app_network/injector";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_NETWORK_BASE_NAME } from "../constants/prefix";

export default function AppNetwork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${APP_NETWORK_BASE_NAME}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      "[app-network] navigated",
      app2NavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[app-network] navigated",
        app2NavigationEventHandler
      );
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname.startsWith(APP_NETWORK_BASE_NAME)) {
      window.dispatchEvent(
        new CustomEvent("[app-shell] navigated", {
          detail: location.pathname.replace(APP_NETWORK_BASE_NAME, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(APP_NETWORK_BASE_NAME, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-network" />;
}
