import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";

export type RouterType = "browser" | "memory";
export const inject = ({
  rootElement,
  basePath,
  routerType,
}: {
  rootElement: HTMLElement;
  basePath?: string;
  routerType: RouterType;
}) => {
  const router = createRouter({ type: routerType, basePath });

  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};
