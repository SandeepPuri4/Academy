// import call2 from '../assests/call2.png'
// import location2 from '../assests/location2.png'
// import timer2 from '../assests/timer3.png'
import logo from '../assests/logo3.png'
import { Link } from 'react-router-dom'


// import instagram from '../assests/instagram.png'
// import whatsapp from '../assests/whatsapp2.png'
// import facebook from '../assests/facebook.png'



export default function Footer() {
  return <> 
       <footer className="h-[630px] bg-gray-100 w-[415px] mx-auto md:h-44 md:w-full md:bg-gray-100 ">
             <div className='flex flex-col justify-between h-[700px] md:flex md:flex-row md:justify-around md:h-52'>
           <div className='flex flex-row justify-center'>
            <p className='mt-5 md:mt-16'>
              <img src={logo} alt='academy-logo' className=' h-[55px] w-[155px] rounded-sm' />
            </p>
           </div>
              
                <div className='flex flex-col justify-center items-center'>
              <p className="mr-1 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
          </p>
                  <h5 className=' text-[18px] font-medium'>Call</h5>
                  <p className=' text-[16px] font-light'>+917016613842 | +919537027523</p>
                </div>
              
              {/* <div className='flex flex-row justify-center mt-12 w-full items-center md:w-52 md:mt-0'> */}
                <div className='flex flex-col justify-center items-center'>
              <p className="mr-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path d="M14,7a2,2,0,1,1-2-2A2,2,0,0,1,14,7Zm2.95,4.957L12,16.8,7.058,11.964a7,7,0,1,1,9.892-.008ZM16,7a4,4,0,1,0-4,4A4,4,0,0,0,16,7Zm5.867,3.613-1.435-.48a8.948,8.948,0,0,1-2.068,3.239L12,19.6l-6.34-6.2A8.989,8.989,0,0,1,3.24,9.029,2.968,2.968,0,0,0,0,12v9.752l7.983,2.281,8.02-2,8,1.948V13.483A3,3,0,0,0,21.867,10.612Z"/></svg>
          </p>
                  <h3 className=' text-[18px] font-medium'>Adderess</h3>
                  <p className=' text-[16px] font-light'>405 Royal Plaza RG road <br/> </p> <p className='font-light'>North West Area , Gandhidham-05</p>
                </div>
              {/* </div> */}
              {/* <div className='flex flex-row justify-center mt-12 w-full items-center md:w-52 md:mt-0'> */}
                <div className='flex flex-col justify-center items-center'>
              <p className=" mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
          </p>
                  <h3 className='text-[18px] font-medium'>Work-Time</h3>
                  <p className=' text-[16px] font-light'>Mon-Fri 9Am-8Pm</p>
                </div>
              {/* </div> */}
              <div className='flex flex-row justify-center mt-12 md:mt-16'>
                
              <ul className='hidden md:block' > 
               <li><a className="font-bold text-[25px] text-green-700 md:hidden" href="/">Links</a></li>
               <li><a className="hover:underline font-semibold " href="/">Home</a></li>
               <li><Link className="hover:underline font-semibold" to="/courses">Courses</Link></li>
               <li><Link className="hover:underline font-semibold" to="/contact">Contact</Link></li>
               <li><a className="hover:underline font-semibold" href="/">About</a></li>
             </ul>
              </div>
             </div>
           

       </footer>
       <ul className='flex justify-center mb-3 gap-4 mx-auto items-center w-[415px] bg-gray-100  md:flex md:justify-center md:w-full h-28 md:gap-6'>
              <li  className="transition-transform duration-300 hover:scale-110"><a href="https://www.instagram.com/futuredev_academy">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg></a></li>
              <li  className="transition-transform duration-300 hover:scale-110"><a href="https://api.whatsapp.com/send?phone=917016613842" className='mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
</svg></a></li>
              <li  className="transition-transform duration-300 hover:scale-110"><a href="https://www.facebook.com/profile.php?id=61560387369650">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
               <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
           </svg></a></li>
            </ul>
  </>
}




