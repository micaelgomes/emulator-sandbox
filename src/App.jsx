import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const secret = import.meta.env.VITE_SECRET_APPETIZE;
  const secret = "wf6m9u592duwkccdm1cwgp01b4";
  const deviceName = "pixel4";

  return (
    <div className="container">
      <div className="content">
        <h1>Maestro - Sandbox Embed App</h1>
        <iframe
          src={`https://appetize.io/embed/${secret}?device=${deviceName}`}
          width="auto"
          height="650px"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
