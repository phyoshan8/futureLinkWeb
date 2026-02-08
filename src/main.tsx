import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "./components/theme-provider";
import './index.css';
import router from "./routes";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="futurelink-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
