import Footer from "../components/Footer";
import Form from "../components/Formm";
import MainNavigation from "../components/MainNavigation";
import MobileNav from "../components/MobileNavMenu";
import Navigation from "../components/Navigation";
// import ContactUsmenuPage from "./ContactUsMenuPage";

export default function ContactPage() {
  return <>
       <MobileNav />
       <MainNavigation />
      <Navigation />
      {/* <ContactUsmenuPage /> */}
      <Form />
      <Footer />
      
  </>
}