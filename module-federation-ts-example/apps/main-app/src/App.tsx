import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <div className="container">
    <div>Name: main-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <ErrorBoundary fallback={<div>Error</div>}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Button
          onClick={() => {
            console.log("Clicked!!");
          }}
        >
          Primary
        </Button>
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>Error</div>}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Button type="warning">Warning</Button>
      </React.Suspense>
    </ErrorBoundary>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
