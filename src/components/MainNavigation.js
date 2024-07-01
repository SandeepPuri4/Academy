import logo from "../assests/logo.png";
import call from "../assests/call2.png";
import timer from "../assests/timer2.png";
import location from '../assests/location2.png'

export default function MainNavigation() {
  return (
    <>
      <header className=" hidden md:h-40 md:flex md:flex-row justify-around w-full">
        <div className="h-40 w-40 flex flex-wrap items-center">
          <img src={logo} alt="logo" className=" h-40 w-80 mx-44 rounded-3xl md:h-36 md:w-40 md:rounded-3xl " />
        </div>
        <div className="flex flex-col md:w-auto md:flex md:flex-wrap md:mx-20 md:gap-10">
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
            <img
              src={call}
              alt="call"
              className="h-[30px] rounded-full my-1"
            />
            <div className="flex flex-col px-3">
              <h2 className="font-bold text-md text-green-900">Call</h2>
              <span className=" text-lg">8879156685</span>
            </div>
          </div>
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
            <img
              src={timer}
              alt="call"
              className="h-[30px]  my-1"
            />
            <div className="flex flex-col px-3">
              <h2 className="font-bold text-md text-green-900">Work-Time</h2>
              <span className="text-lg">mon-Fri<br/>9Am-8Pm</span>
            </div>
          </div>
          <div className="flex justify-evenly mx-4 my-3 px-3 py-6">
            <img
              src={location}
              alt="call"
              className="h-[25px] rounded-full my-1"
            />
            <div className="flex flex-col px-3">
              <h2 className="font-bold text-lg text-green-900">Adderess</h2>
              <span className="text-lg">
                405, coloaba
                <br />
                cuppared
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
