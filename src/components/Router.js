import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../pages/Rootlayout";
import CoursesPage from "../pages/CoursesPage";
// import MainNavigation from "./MainNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      // { path: "", element: <MainNavigation/> },
      { path: "courses", element: <CoursesPage /> },
    ],
  },
]);

export default router;