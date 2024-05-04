import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ProjectProvider } from "./utils/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectProvider>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </ProjectProvider>
);
