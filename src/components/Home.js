import Courses from "./Courses";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import MainSection from "./MainSection";
// import MobileNav from "./MobileNavMenu";
// import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Form from "./Formm";



export default function Home() {
  return <>
  
          {/* <MobileNav /> */}
          <MainNavigation />
          {/* <Navigation /> */}
          <MainSection />
          <Welcome />
          <Courses />
          <Form />
          <Footer />
  
  
  </>
}