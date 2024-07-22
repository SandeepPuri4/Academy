import rightimage from "../assests/Right2.png"
// import logo from '../assests/futuredevLogo.png.jpg'
import { useDispatch } from 'react-redux';
import { openForm } from '../store/formSlice';
import Form from "./Form";
import MobileNav from "./MobileNavMenu";






export default function MainSection() {

 
  const dispatch = useDispatch();

  function enquiryHandler() {
    dispatch(openForm());
  }
  return <>
  
         {/* <div className="h-[100px] w-[280px] mt-24 mb-1 mx-2 md:hidden">
          <img src={logo} alt="logo" className="h-[80px] rounded-sm"/>
         </div> */}
         <MobileNav />
         <div className="h-[435px] w-[415px] mx-auto bg-blue-50 md:bg-white md:h-[600px] flex md:w-full lg:w-full md:mx-auto md:py-3">
          <div className="  w-[415px]  md:w-[80rem] md:flex md:mx-auto lg:mx-auto ">
      <div className="mt-0 h-[400px] md:h-[550px] flex flex-col md:flex md:flex-row md:py-14 md:px-2 md:w-[50%]">
          <div className="mt-5 flex flex-col md:mt-14 md:w-full lg:w-full">
            <h1 className="text-[30px] text-prime1 mx-auto text-center  font-semibold  xl:text-[55px] md:text-[40px] md:w-full md:px-1">Get Skilled & Boost</h1>
            <h1  className="text-[30px] text-center mx-auto text-prime1 font-semibold  xl:text-[55px] md:text-[40px] md:w-full">Your Career</h1>
            <div className="block md:hidden">
            <div className=" w-[415px] mt-6 h-[180px] md:hidden">
              <p className="text-[16px] text-center px-10">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals.</p> 
              {/* <p className="text-[16px] px-8">and industry partners, with dedicated mentorship </p>
              <p className="text-[16px] px-12">and expert career guidance.,We partner with</p>
              <p className="text-[16px] px-12">companies and individuals to address their</p>
              <p className="text-[16px] px-10">unique needs, providing training and coaching</p>
              <p className="text-[16px] px-11">that helps working professionals achieve their</p>
              <p className="text-[16px] px-40">career goals.</p> */}
            </div>
            </div>
            <div className="hidden md:block mx-auto lg:px-4">
            <div className="hidden md:block md:w-full md:px-6 mt-1 mx-auto md:ml-5">
              
            <p className="text-[16px] text-center">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals.</p>
            </div>
            </div>
            <div className=" mt-8 w-full mx-auto px-[122px] md:mt-6 lg:px-8 md:px-36 lg:mx-16 md:mx-auto">
              <button onClick={enquiryHandler} className="bg-green-600  mt-0 text-white px-7 py-2 rounded-3xl hover:bg-green-500] hover:bg-green-500 ">ENQUIRY NOW</button>
            </div>
            <Form />
          </div>
       </div>


        <div className=" hidden md:block md:w-[50%] md:h-[450px] lg:h-[500px] object-cover md:px-7 lg:px-20 lg:py-2 md:py-2">
        <div className="hidden md:block items-center h-full mx-auto">
          <img src={rightimage} className="w-[500px] h-full items-center justify-center object-cover" alt="rightsideimage"/>
      </div>
      </div>
        </div>


      </div>

  </>
}


