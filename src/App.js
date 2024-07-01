import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Form from "./components/Form";

import MainNavigation from "./components/MainNavigation";
import MainSection from "./components/MainSection";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";


function App() {
  return <>
       <MainNavigation />
       <Navigation />
       <MainSection />
       <Welcome />
       <Courses />
       <Form />
       <Footer />
  </>
}

export default App;
