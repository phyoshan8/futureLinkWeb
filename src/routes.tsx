import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
]);

export default router;  