import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="dark">
      <App />
    </Provider>
  </StrictMode>
);
