import rightimage from "../assests/Right2.png"
// import logo from '../assests/futuredevLogo.png.jpg'
import { useDispatch } from 'react-redux';
import { openForm } from '../store/formSlice';
import Form from "./Form";




export default function MainSection() {

  const dispatch = useDispatch();

  function enquiryHandler() {
    dispatch(openForm());
  }
  return <>
         {/* <div className="h-[100px] w-[280px] mt-24 mb-1 mx-2 md:hidden">
          <img src={logo} alt="logo" className="h-[80px] rounded-sm"/>
         </div> */}
         <div className="h-[400px] md:w-[80rem] flex mx-auto">
          <div className="md:w-[80rem] md:flex ">
      <div className="mt-0 h-[400px] md:h-[510px] flex flex-col md:flex md:flex-row md:mt-24 ">
          <div className="mt-5 flex flex-col pl-2 md:mt-14">
            <h1 className="text-[40px] text-green-950 pl-5 font-semibold  md:text-[70px] md:w-[650px]">Get Skilled & Boost</h1>
            <h1  className="text-[40px] pl-20 text-green-950 font-semibold  md:text-[70px] md:w-[650px]">Your Career</h1>
            <div className=" w-[100%] h-[220px] md:w-[700px]">
              
            <p className="w-[98%] px-1 ml-1 mt-4 font-[100px] text-stone-700 text-[17px] ">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals</p>
            </div>
            <div className=" w-full mx-auto px-auto">
              <button onClick={enquiryHandler} className="bg-green-600 mx-auto ml-28 mt-0 text-white px-7 py-2 rounded-3xl hover:bg-green-500] hover:bg-green-500 ">ENQUIRY NOW</button>
            </div>
            <Form />
          </div>
       </div>


        <div className=" hidden md:block md:w-[40rem]">
        <div className="hidden md:block items-center">
          <img src={rightimage} alt="rightsideimage"/>
      </div>
      </div>
        </div>


      </div>

  </>
}