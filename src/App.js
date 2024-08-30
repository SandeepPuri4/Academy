import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import Wrapper from "./components/Wrapper";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <AboutPage /> },
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
