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
         <div className="h-[400px] w-[400px]   bg-blue-50 md:bg-white md:h-[700px] flex mx-auto md:w-[75rem] md:mx-auto">
          <div className="md:w-[80rem] md:flex ">
      <div className="mt-0 h-[400px] md:h-[510px] flex flex-col md:flex md:flex-row md:mt-24 ">
          <div className="mt-5 flex flex-col md:mt-14">
            <h1 className="text-[30px] text-green-950 mx-auto  font-semibold  md:text-[70px] md:w-[650px]">Get Skilled & Boost</h1>
            <h1  className="text-[30px] mx-auto text-green-950 font-semibold  md:text-[70px] md:w-[650px] md:mx-auto md:px-24">Your Career</h1>
            <div className=" w-[400px] h-[180px] md:w-[700px]">
              
            <p className="w-[400px] px-3 h-[150px] mx-auto mt-4 text-[15px] text-stone-700 md:text-[17px] md:px-0 md:w-[680px] md:mx-auto ">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals.</p>
            </div>
            <div className=" mt-6 mx-auto md:mx-16 md:mt-2">
              <button onClick={enquiryHandler} className="bg-green-600  mx-auto mt-0 text-white px-7 py-2 rounded-3xl hover:bg-green-500] hover:bg-green-500 ">ENQUIRY NOW</button>
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