import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { BingoCard } from "./features/BingoCard/components/BingoCard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BingoCard />
  </React.StrictMode>
);
