import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
