import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("app")!).render(<App name="isolated" />);
