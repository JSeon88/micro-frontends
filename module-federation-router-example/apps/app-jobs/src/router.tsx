import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { type RouterType } from "./injector";
import { routes } from "./routes";

interface CreateRouterProps {
  type: RouterType;
  basePath?: string;
}
export const createRouter = ({
  type,
  basePath,
}: CreateRouterProps):
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter> => {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath || "/"] });
  }
};
