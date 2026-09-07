import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
