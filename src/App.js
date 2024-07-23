// import Courses from "./components/Courses";
// import Footer from "./components/Footer";
// import Form from "./components/Formm";

// import MainNavigation from "./components/MainNavigation";
// import MainSection from "./components/MainSection";
// import MobileNav from "./components/MobileNavMenu";
// import Navigation from "./components/Navigation";
// import Welcome from "./components/Welcome";
// // import Form from "./components/Formm";
// // import router from "./components/Router";
// // import { RouterProvider } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import Wrapper from "./components/Wrapper";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
