// import call2 from '../assests/call2.png'
// import location2 from '../assests/location2.png'
// import timer2 from '../assests/timer3.png'
import logo from '../assests/logo3.png'


import instagram from '../assests/instagram.png'
import whatsapp from '../assests/whatsapp2.png'
import facebook from '../assests/facebook.png'



export default function Footer() {
  return <> 
       <footer className="h-[730px] w-full md:h-44 ">
             <div className='flex flex-col justify-between h-[700px] md:flex md:flex-row md:justify-around md:h-52'>
           <div className='flex flex-row justify-center'>
            <p className='mt-5 md:mt-16'>
              <img src={logo} alt='academy-logo' className='h-[80px] w-[230px] rounded-sm' />
            </p>
           </div>
              <div className='flex flex-row justify-center mt-12 w-full items-center md:w-52 md:mt-0'>
              <p className="mr-3 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
          </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Call</h3>
                  <p className='font-semibold text-[17px]'>7016613842/<br/>9537027523</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12 w-full items-center md:w-52 md:mt-0'>
              <p className="mr-3 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
          </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Adderess</h3>
                  <p className='font-semibold text-[17px]'>Gandhidhaam,<br/>Kutch</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12 w-full items-center md:w-52 md:mt-0'>
              <p className="mr-3 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path d="M14,7a2,2,0,1,1-2-2A2,2,0,0,1,14,7Zm2.95,4.957L12,16.8,7.058,11.964a7,7,0,1,1,9.892-.008ZM16,7a4,4,0,1,0-4,4A4,4,0,0,0,16,7Zm5.867,3.613-1.435-.48a8.948,8.948,0,0,1-2.068,3.239L12,19.6l-6.34-6.2A8.989,8.989,0,0,1,3.24,9.029,2.968,2.968,0,0,0,0,12v9.752l7.983,2.281,8.02-2,8,1.948V13.483A3,3,0,0,0,21.867,10.612Z"/></svg>
          </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Work-Time</h3>
                  <p className='font-semibold text-[17px]'>9 Am to <br/>8 Pm</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12 md:mt-16'>
                
              <ul className='' > 
               <li><a className="font-bold text-[25px] text-green-700 md:hidden" href="/">Links</a></li>
               <li><a className="hover:underline font-semibold " href="/">Home</a></li>
               <li><a className="hover:underline font-semibold" href="/">Courses</a></li>
               <li><a className="hover:underline font-semibold" href="/">Contact</a></li>
               <li><a className="hover:underline font-semibold" href="/">About</a></li>
             </ul>
              </div>
             </div>
           

       </footer>
       <ul className='flex justify-center gap-4 items-center w-full   md:flex md:justify-center md:w-full'>
              <li><a href="https://www.instagram.com/futuredev_academy">
            <img className="transition-transform duration-300 hover:scale-110" src={instagram} alt="description" /></a></li>
              <li><a href="https://api.whatsapp.com/send?phone=917016613842" className='mt-2'>
            <img className="transition-transform duration-300 hover:scale-110" src={whatsapp} alt="description" /></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61560387369650">
            <img className="transition-transform duration-300 hover:scale-110" src={facebook} alt="description" /></a></li>
            </ul>
  </>
}