import instagram from '../assests/instagram.png'
import whatsapp from '../assests/whatsapp2.png'
import facebook from '../assests/facebook.png'

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
          
            <ul className='flex justify-between w-44'>
              <li><a href="https://www.instagram.com/futuredev_academy">
            <img className="transition-transform duration-300 hover:scale-110" src={instagram} alt="description" /></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=917016613842" className='mt-2'>
            <img className="transition-transform duration-300 hover:scale-110" src={whatsapp} alt="description" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61560387369650">
            <img className="transition-transform duration-300 hover:scale-110" src={facebook} alt="description" /></a></li>
            </ul>
          
         </div>
         </>
}