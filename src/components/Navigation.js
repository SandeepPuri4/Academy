

export default function Navigation() {
  return <>
         <div className="hidden md:flex justify-around">
          <div>
          <ul className="hidden md:flex flex-row gap-16 justify-center items-center text-[20px] font-[60px]"> 
        <li><a className="hover:underline" href="/">Home</a></li>
        <li><a className="hover:underline" href="/">Courses</a></li>
        <li><a className="hover:underline" href="/">Contact</a></li>
        <li><a className="hover:underline" href="/">About</a></li>
      </ul>
          </div>
          <div>
            <button className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700">ENQUIRY</button>
          </div>
         </div>
         </>
}