import { inject } from "./injector";

inject({
  rootElement: document.getElementById("app") as HTMLElement,
  routerType: "browser",
});
