import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const elementId = "isolated-app";
const App = () => {
  useEffect(() => {
    let unmount = () => {};
    import("isolated_app/injector").then(({ inject }) => {
      unmount = inject(elementId, { name: "main" });
    });

    return () => unmount();
  }, []);

  return (
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div id={elementId}></div>
    </div>
  );
};

createRoot(document.getElementById("app")!).render(<App />);
