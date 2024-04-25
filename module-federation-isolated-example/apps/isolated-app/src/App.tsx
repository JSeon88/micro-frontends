import React from "react";

import "./index.css";

export interface AppProps {
  name: string;
}

const App = ({ name }: AppProps) => (
  <div className="container">
    <div>Name: isolated-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>{name}</div>
  </div>
);

export default App;
