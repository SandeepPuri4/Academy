import MainNavigation from "../components/MainNavigation";
import MobileNav from "../components/MobileNavMenu";
import rightimage from "../assests/aboutImage.png";
import Form from "../components/Formm";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <>
      <MainNavigation />
      <MobileNav />

      <div className="mt-2 md:mt-10">
        <h1 className="text-[40px] border-b-2  md:text-[50px] xl:text-5xl font-semibold text-org1 text-center ">
          About Us!
        </h1>
      </div>

      <div className="mt-10 md:mt-32 flex md:gap-10 md:mx-1 md:mb-7 flex-col md:flex-row items-center justify-between mx-auto px-4 md:px-8 lg:px-16">
        {/* Content Section */}
        <div className="flex-1 md:w-1/2 lg:w-1/2 mb-6 md:mb-0">
          <div className="flex flex-col md:ml-10 items-center md:items-start">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-org1 text-center md:text-left">
              Project Based Learning
            </h1>
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-org1 text-center md:text-left mt-2">
              FutureDev Academy
            </h1>

            <p className="text-base md:text-lg text-white text-center md:text-left mt-4 md:mt-6 px-2 md:px-0">
              At FutureDev Academy, we believe that the best way to learn is by
              doing. Our Project-Based Learning approach immerses students in
              real-world projects that challenge their creativity and
              problem-solving skills. By working on actual projects, students
              gain hands-on experience, apply theoretical knowledge in practical
              scenarios, and develop a deeper understanding of their field. This
              method not only enhances technical skills but also fosters
              critical thinking and collaboration, preparing our students to
              excel in their careers and make a meaningful impact in the
              industry.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1  py-5 md:w-1/2 lg:w-1/2 flex items-center justify-center">
          <img
            src={rightimage}
            className=" h-[320px]  w-full  max-w-sm md:max-w-md lg:max-w-lg rounded-xl object-cover"
            alt="rightsideimage"
          />
        </div>
      </div>

      <Form />
      <Footer />
    </>
  );
}
