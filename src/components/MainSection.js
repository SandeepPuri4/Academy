import rightimage from "../assests/left.png"
// import logo from '../assests/futuredevLogo.png.jpg'


export default function MainSection() {
  return <>
         {/* <div className="h-[100px] w-[280px] mt-24 mb-1 mx-2 md:hidden">
          <img src={logo} alt="logo" className="h-[80px] rounded-sm"/>
         </div> */}
      <div className="mt-0  md:w-full h-[510px] flex flex-col md:flex md:flex-row md:mt-5 ">
          <div className="mt-5 flex flex-col pl-2 md:mt-14 mx-auto">
            <h1 className="text-[40px] text-green-950 font-semibold md:ml-44 md:text-[70px]">Get Skilled & Boost<br/>Your Career</h1>
            <p className="px-3 mt-8 font-[100px] md:ml-44 text-stone-700 text-[17px]">Enroll in our programs built with top university and industry partners, with dedicated mentorship and expert career guidance.,<br/> We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals</p>
            <div className="md:ml-40 ">
              <button className="bg-green-600 ml-[80px] mt-10 text-white px-7 py-2 rounded-3xl hover:bg-green-500] hover:bg-green-500 ">ENQUIRY NOW</button>
            </div>
          </div>
       
        <div className="hidden md:block items-center pr- mt-12">
          <img src={rightimage} alt="rightsideimage" className=""/>
        </div>
      </div>
  </>
}