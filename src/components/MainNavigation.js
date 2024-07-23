import logo from "../assests/whiteLogo.png";
// import call from "../assests/call2.png";
// import timer from "../assests/timer2.png";
// import location from '../assests/location2.png'
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <>
    <div className="mx-auto bg-prime2 text-white md:w-full">
      <header className=" hidden md:h-40 md:flex md:flex-row justify-between w-full mx-auto lg:px-4 md:px-0">
        <p className="h-[70px] lg:w-[390px] xl:w-[700px] md:w-[250px] my-auto  md:ml-6 object-cover md:items-start">
          <img src={logo} alt="logo" className="ml-3 mt-2 xl:w-[210px] xl:h-[75px] xl:mx-28 " />
          </p>
        {/* <div className="flex flex-col md:w-auto md:flex md:flex-wrap md:mx-20 md:gap-10">
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
            <p className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
          </p>

            <div className="flex flex-col px-3">
              <h2 className="font-bold text-md ">Call</h2>
              <span className=" text-lg">7016613842/<br/>9537027523</span>
            </div>
          </div>
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
          <p className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
          </p>
            <div className="flex flex-col px-3">
              <h2 className="font-bold text-md ">Work-Time</h2>
              <span className="text-lg">mon-Fri<br/>9Am-8Pm</span>
            </div>
          </div>
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
          <p className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path d="M14,7a2,2,0,1,1-2-2A2,2,0,0,1,14,7Zm2.95,4.957L12,16.8,7.058,11.964a7,7,0,1,1,9.892-.008ZM16,7a4,4,0,1,0-4,4A4,4,0,0,0,16,7Zm5.867,3.613-1.435-.48a8.948,8.948,0,0,1-2.068,3.239L12,19.6l-6.34-6.2A8.989,8.989,0,0,1,3.24,9.029,2.968,2.968,0,0,0,0,12v9.752l7.983,2.281,8.02-2,8,1.948V13.483A3,3,0,0,0,21.867,10.612Z"/></svg>
          </p>
            <div className="flex flex-col px-3">
              <h2 className="font-bold text-lg ">Adderess</h2>
              <span className="text-lg">
                Gandhidhaam,
                <br />
                Kutch
              </span>
            </div>
          </div>
        </div> */}
                 <div className="w-full my-auto">
          <ul className="hidden md:flex flex-row md:gap-10 lg:gap-16 justify-center items-end md:text-[25px] lg:text-[23px] font-[60px]"> 
        <li><a className="hover:underline hover:text-org1" href="/">Home</a></li>
        <li><Link className="hover:underline hover:text-org1" to="/courses">Courses</Link></li>
        <li><Link className="hover:underline hover:text-org1" to="/contact">Contact</Link></li>
        <li><a className="hover:underline hover:text-org1" href="/">About</a></li>
        <button className="bg-org1  mt-0 text-white px-4 py-1 rounded-3xl hover:bg-orange-600 ">Services</button>
      </ul>
          </div>
      </header>
      </div>
    </>
  );
}
