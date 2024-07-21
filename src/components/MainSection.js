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
         <div className="h-[435px] w-[415px] mx-auto bg-blue-50 md:bg-white md:h-[600px] flex md:w-full md:mx-auto md:py-3">
          <div className="  w-[415px]  md:w-[80rem] md:flex md:mx-auto ">
      <div className="mt-0 h-[400px] md:h-[550px] flex flex-col md:flex md:flex-row md:py-14 md:px-2">
          <div className="mt-5 flex flex-col md:mt-14">
            <h1 className="text-[30px] text-prime1 mx-auto  font-semibold  md:text-[60px] md:w-full md:px-5">Get Skilled & Boost</h1>
            <h1  className="text-[30px] mx-auto text-prime1 font-semibold  md:text-[60px] md:w-full md:mx-auto md:px-28">Your Career</h1>
            <div className="block md:hidden">
            <div className=" w-[415px] mt-6 h-[180px] md:hidden">
              <p className="text-[16px] px-10">Enroll in our programs built with top university</p> 
              <p className="text-[16px] px-8">and industry partners, with dedicated mentorship </p>
              <p className="text-[16px] px-12">and expert career guidance.,We partner with</p>
              <p className="text-[16px] px-12">companies and individuals to address their</p>
              <p className="text-[16px] px-10">unique needs, providing training and coaching</p>
              <p className="text-[16px] px-11">that helps working professionals achieve their</p>
              <p className="text-[16px] px-40">career goals.</p>
            </div>
            </div>
            <div className="hidden md:block mx-auto px-4">
            <div className="hidden md:block md:w-[650px] mt-2 mx-auto">
              
            <p className="text-[16px]">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals.</p>
            </div>
            </div>
            <div className=" mt-8 w-full mx-auto px-[122px] md:mt-6 md:px-8 md:mx-16">
              <button onClick={enquiryHandler} className="bg-green-600  mt-0 text-white px-7 py-2 rounded-3xl hover:bg-green-500] hover:bg-green-500 ">ENQUIRY NOW</button>
            </div>
            <Form />
          </div>
       </div>


        <div className=" hidden md:block md:w-full md:h-[550px]">
        <div className="hidden md:block items-center h-full mx-auto px-4">
          <img src={rightimage} className="w-[550px] h-full items-center justify-center" alt="rightsideimage"/>
      </div>
      </div>
        </div>


      </div>

  </>
}


