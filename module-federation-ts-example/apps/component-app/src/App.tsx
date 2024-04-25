import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./components/Button";

const App = () => (
  <div className="container">
    <div>Name: component-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Click me..!!</Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
