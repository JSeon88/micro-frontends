import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app-network</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
