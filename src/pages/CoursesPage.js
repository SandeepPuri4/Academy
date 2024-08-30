// import Courses from "../components/Courses";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
import MobileNav from "../components/MobileNavMenu";
// import Navigation from "../components/Navigation";

import node from "../assests/node.png";
import python from "../assests/python.png";
import reactCourse from "../assests/reactcourse.png";
import java from "../assests/java_course.png";
import angular from "../assests/Angular.png";
import digital from "../assests/digitalmarketing.png";
import html from "../assests/web_design.png";
import web from "../assests/webicon.png";
import Form from "../components/Formm";
// import flutter from '../assests/flutterImg.png';

export default function CoursesPage() {
  const courses = [
    { title: "Complete Node.js Course", image: node },
    { title: "Complete React.js Course", image: reactCourse },
    { title: "Complete Python Course", image: python },
    { title: "Complete Web Designing", image: html },
    { title: "Complete Java Course", image: java },
    { title: "Complete Digital Marketing", image: digital },
    { title: "Complete Angular Course", image: angular },
    { title: "Complete Web Designing", image: html },
    { title: "Complete Web Designing", image: html },
    // { title: 'Complete Flutter Course', image: flutter },
  ];
  return (
    <>
      <MobileNav />
      <MainNavigation />

      <div className="mt-12 mx-auto h-36 w-[415px] md:w-full md:h-44 xl:h-48 md:mt-16">
        <div className="flex flex-col h-36 w-[100%] px-4 md:w-full md:h-60 md:flex md:flex-col items-center ">
          <h1 className="font-semibold text-[30px] mx-auto text-center text-org1 md:font-bold lg:text-[55px] md:text-[52px] md:justify-center">
            Our Best Courses
          </h1>
          <div className="w-[415px] h-72 md:hidden">
            <p className="text-center text-white text-[16px] px-3">
              Each of our courses is designed to be easy to navigate up to date
              on the industry, to assist you with questions and help you find a
              job.
            </p>
            {/* <p className="items-center text-[16px] px-3">up to date on the industry, to assist you with questions</p>
            <p className="items-center text-[16px] px-[115px]">and help you find a job.</p> */}
          </div>

          <p className="hidden md:block text-center md:text-white text-[18px] ">
            Each of our courses is designed to be easy to navigate.
            <br />
            up-to-date on the industry, to assist you with questions and
          </p>
          <p className="hidden md:block md:text-white text-[18px] ">
            to help you find a job.
          </p>
        </div>
      </div>

      <div className=" h-full w-[415px] text-white mx-auto lg:h-[100rem] xl:h-[65rem] md:h-[105rem] md:w-full lg:w-full lg:mx-auto">
        <div className=" md:h-full lg:w-full lg:mx-auto">
          <div className="flex-col h-full justify-between lg:px-32 md:flex md:px-2 md:py-2 md:flex-row md:justify-around  md:h-full lg:w-full md:w-full md:flex-wrap">
            {courses.map((course, index) => (
              <div key={index} className="h-[355px] md:h-[320px] md:w-[370px]">
                <div className="flex justify-center flex-col h-[7rem] items-start">
                  <h3 className="font-semibold text-xl ml-5">{course.title}</h3>
                  <div className="flex flex-row pt-1 ml-5">
                    <p>Web development</p>
                    <img
                      src={web}
                      alt="web-logo"
                      className="w-[25px] h-[25px] ml-2"
                    />
                  </div>
                  <p className="w-[80%], h-7">
                    <img
                      src={course.image}
                      alt={`${course.title}-image`}
                      className="p-3 transition-transform duration-300 hover:scale-105"
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className='md:hidden'>
          <Slider {...settings}>
            {courses.map((course, index) => (
              <div key={index} className='h-[370px]'>
                <div className='flex justify-center flex-col h-[7rem] items-start'>
                  <h3 className='font-semibold text-xl ml-5'>{course.title}</h3>
                  <div className='flex flex-row pt-1 ml-5'>
                    <p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2' />
                  </div>
                  <p className='w-[80%], h-7'>
                    <img src={course.image} alt={`${course.title}-image`} className='p-3 transition-transform duration-300 hover:scale-105' />
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
      <Form />
      <Footer />
    </>
  );
}
