import logo from "../assests/whiteLogo.png";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <>
      <div className=" md:mx-4 text-white md:w-full ">
        <header className=" hidden md:h-40 md:flex md:flex-row justify-between w-full mx-auto lg:px-4 md:px-0">
          <Link
            to="/"
            className="h-[70px] w-[30%] lg:w-[390px] xl:w-[700px] md:w-[220px] my-auto md:mx-auto object-cover md:items-start"
          >
            <img
              src={logo}
              alt="logo"
              className=" mt-2 xl:w-[190px]  xl:mx-28"
            />
          </Link>
          <div className="w-[70%] mx-20 my-auto">
            <ul className="hidden md:flex flex-row  justify-around  md:text-[25px] lg:text-[23px] font-[60px]">
              <li>
                <a className=" hover:text-org1" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link className=" hover:text-org1" to="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className=" hover:text-org1" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className=" hover:text-org1" to="/about">
                  About
                </Link>
              </li>
              {/* <button className="bg-org1  mt-0 text-white px-4 py-1 rounded-3xl hover:bg-orange-600 ">Services</button> */}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
