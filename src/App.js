import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Form from "./components/Formm";

import MainNavigation from "./components/MainNavigation";
import MainSection from "./components/MainSection";
import MobileNav from "./components/MobileNavMenu";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
// import Form from "./components/Formm";


function App() {
  return <>
      <MobileNav />
      
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
