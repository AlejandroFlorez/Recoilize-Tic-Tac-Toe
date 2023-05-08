import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./client/components/App";
import { RecoilRoot } from "recoil";
import RecoilizeDebugger from "recoilize";
import styles from "./client/styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RecoilizeDebugger />
    <App />
  </RecoilRoot>
);
