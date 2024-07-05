import Courses from "../components/Courses";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import MobileNav from "../components/MobileNavMenu";
import Navigation from "../components/Navigation";




export default function CoursesPage() {
  return (
    <>
      <MobileNav />
      <MainNavigation />
      <Navigation />
      <Courses />
      <Footer />
    </>
  );
}
