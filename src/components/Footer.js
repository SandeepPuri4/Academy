// import call2 from '../assests/call2.png'
// import location2 from '../assests/location2.png'
// import timer2 from '../assests/timer3.png'
// import logo from '../assests/logo3.png'
import logo from "../assests/whiteLogo.png"
// import { Link } from 'react-router-dom'




// import instagram from '../assests/instagram.png'
// import whatsapp from '../assests/whatsapp2.png'
// import facebook from '../assests/facebook.png'



export default function Footer() {
  return <> 
       {/* <footer className="h-[600px] bg-gray-100 w-[415px] mt-2 mx-auto md:h-44 md:w-full md:bg-gray-100 md:mx-auto ">
             <div className='flex flex-col justify-between h-[600px] md:flex md:flex-row md:justify-around md:h-52'>
           <div className='flex flex-row justify-center'>
            <p className='mt-5 md:mt-16'>
              <img src={logo} alt='academy-logo' className=' h-[55px] w-[155px] rounded-sm' />
            </p>
           </div>
              
                <div className='flex flex-col justify-center items-center'>
              <p className="mr-1 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22" height="22"><path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z"/></svg>
          </p>
                  <h5 className=' text-[18px] font-medium'>Call</h5>
                  <p className=' text-[16px] font-light'>+917016613842/<br/>+919537027523</p>
                </div>
              
            
                <div className='flex flex-col justify-center items-center'>
              <p className="mr-3 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M14,7a2,2,0,1,1-2-2A2,2,0,0,1,14,7Zm2.95,4.957L12,16.8,7.058,11.964a7,7,0,1,1,9.892-.008ZM16,7a4,4,0,1,0-4,4A4,4,0,0,0,16,7Zm5.867,3.613-1.435-.48a8.948,8.948,0,0,1-2.068,3.239L12,19.6l-6.34-6.2A8.989,8.989,0,0,1,3.24,9.029,2.968,2.968,0,0,0,0,12v9.752l7.983,2.281,8.02-2,8,1.948V13.483A3,3,0,0,0,21.867,10.612Z"/></svg>
          </p>
                  <h3 className=' text-[18px] font-medium'>Address</h3>
                  <p className=' text-[16px] font-light'>405 Royal Plaza RG road <br/> </p> <p className='font-light'>North West Area , Gandhidham-05</p>
                </div>
           
                <div className='flex flex-col justify-center items-center'>
              <p className=" mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="22" height="22"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
          </p>
                  <h3 className='text-[18px] font-medium'>Work-Time</h3>
                  <p className=' text-[16px] font-light'>Mon-Fri 9Am-8Pm</p>
                </div>
             
             </div>
           

       </footer> */}

<footer className="bg-prime1 border-t border-gray-50 text-white py-12 mt-14 md:mt-0">
      <div className="md:w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Section - Company Logo and Google Map */}
          <div className="flex flex-col mb-8  md:w-1/3">
            <div className="flex items-center mb-4 md:mb-0 md:mt-10">
              <img className="h-10 w-auto md:h-16" src={logo} alt="Company Logo" />
            </div>
            <div className="aspect-w-16 aspect-h-9 mb-4 md:hidden">
              <iframe
                className="w-[70%] h-full"
                title="futureDev Academy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.857503966925!2d70.07476411118057!3d23.065685179056533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b9e0724a93ff%3A0xe6f0a960391b2a54!2sGEB%20Office!5e0!3m2!1sen!2sin!4v1721669511833!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Contact Info, Address, Work Time, Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 md:gap-10">
            <div className="flex items-start mb-4 md:mb-0 md:gap-5">
             <p></p>
             <div>
  <h2 className="text-lg font-semibold text-orange-600">Contact Us</h2>
  <ul>
    <li>
      Phone:<br />
      <a href="tel:+7016270941" className="hover:text-org1" >7016270941</a> / <a href="tel:+7016613842" className="hover:text-org1">7016613842</a>
    </li>
    <li >Email: <a href="mailto:info@example.com" className="hover:text-org1">futuredevacademy@gmail.com</a></li>
  </ul>
</div>

            </div>

            <div className="flex items-start mb-4 md:mb-0">
              {/* <img className="h-6 w-6 mr-2" src={location2} alt="Address Icon" /> */}
              <div>
                <h2 className="text-lg font-semibold text-orange-600">Address</h2>
                <p className=''>SAX118, First Floor,<br/> 17 wali Road, Opp. GEB Office,<br/> Adipur, Gandhidham, Kutch-370205</p>
              </div>
            </div>

            <div className="flex items-start mb-4 md:mb-0">
              {/* <img className="h-6 w-6 mr-2" src={timer2} alt="Clock Icon" /> */}
              <div>
                <h2 className="text-lg font-semibold text-orange-600">Class Hours</h2>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className='xl:text-center w-1/2 xl:w-1/4'>
  <h2 className="text-lg font-semibold text-orange-600">About Our Academy</h2>
  <p className="mt-2 text-gray-300">
    At Our Academy, we are dedicated to providing top-notch education and training in various fields. 
  </p>
  <ul className="flex flex-row justify-evenly my-6">
  <li className="transition-transform duration-300 hover:scale-110">
    <a href="https://www.instagram.com/futuredev_academy" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" height="25" width="25" strokeWidth="1">
        <g id="instagram-logo">
          <path fill="url(#paint0_linear_6582_12242)" fillRule="evenodd" d="M12.4571 1.76417C15.4553 1.61319 19.2778 1.5 24 1.5c4.7222 0 8.5447.1132 11.5429.26417C41.433 2.06077 45.9392 6.567 46.2358 12.457c.151 2.9983.2642 6.8208.2642 11.543 0 4.7222-.1132 8.5447-.2642 11.543-.2966 5.89-4.8028 10.3962-10.6929 10.6928-2.9982.151-6.8207.2642-11.5429.2642-4.7222 0-8.5447-.1132-11.5429-.2642C6.567 45.9392 2.06077 41.433 1.76417 35.5429 1.61319 32.5447 1.5 28.7222 1.5 24c0-4.7222.1132-8.5447.26417-11.543C2.06077 6.56699 6.567 2.06077 12.4571 1.76417ZM35 10c0-1.10457.8954-2 2-2h1c1.1046 0 2 .89543 2 2 0 1.1046-.8954 2-2 2h-1c-1.1046 0-2-.8954-2-2Zm-11 6c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8Zm-12 8c0-6.6274 5.3726-12 12-12s12 5.3726 12 12-5.3726 12-12 12-12-5.3726-12-12Z" clipRule="evenodd"></path>
        </g>
        <defs>
          <linearGradient id="paint0_linear_6582_12242" x1="50.4" x2="-10.299" y1="56.031" y2="12.915" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd600"></stop>
            <stop offset="1" stopColor="#ff007a"></stop>
          </linearGradient>
        </defs>
      </svg>
    </a>
  </li>

  <li className="transition-transform duration-300 hover:scale-110">
    <a href="https://api.whatsapp.com/send?phone=917016613842" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25" width="25" strokeWidth="1">
        <g id="Whatsapp-Logo--Streamline-Sharp-Gradient">
          <path fill="url(#paint0_linear_246_3146)" fillRule="evenodd" d="M4.36819 3.36827C6.52486 1.2116 9.44993 0 12.4999 0c3.05 0 5.9751 1.2116 8.1317 3.36827 2.1567 2.15667 3.3683 5.08174 3.3683 8.13173 0 3.05-1.2116 5.9751-3.3683 8.1317C18.475 21.7884 15.5499 23 12.4999 23c-1.601 0-3.16769-.3339-4.60676-.963l-6.255 1.5342-1.6024955.3931.3930615-1.6025 1.534234-6.255C1.3338 14.6677.999917 13.101.999917 11.5c0-3.04999 1.211603-5.97506 3.368273-8.13173ZM12.3792 14.5324l.8727-1.4624.1971-.3301.3696.1056 3.5087 1.0025.4098.1171-.0507.4231-.3411 2.8474-.0558.4657-.4683-.026c-1.6871-.0934-3.3577-.5691-4.8707-1.4276-.8532-.4841-1.6557-1.0896-2.3821-1.816-.72641-.7264-1.3319-1.5289-1.816-2.3821-.85849-1.513-1.33417-3.18362-1.42763-4.87072l-.02594-.46831.4657-.05579 2.84733-.34112.42314-.05069.1171.40978 1.0025 3.50875.1056.3696-.3301.1971-1.46232.8727c.37289.5668.80882 1.1046 1.30782 1.6037.4991.499 1.0369.9349 1.6036 1.3078Z" clipRule="evenodd"></path>
        </g>
        <defs>
          <linearGradient id="paint0_linear_246_3146" x1="26.077" x2="-6.247" y1="29.04" y2="6.079" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd600"></stop>
            <stop offset="1" stopColor="#FF007A"></stop>
          </linearGradient>
        </defs>
      </svg>
    </a>
  </li>

  <li className="transition-transform duration-300 hover:scale-110">
    <a href="https://www.facebook.com/profile.php?id=61560387369650" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="25" width="25" strokeWidth="1">
        <g id="facebook-2--media-facebook-social">
          <path fill="url(#paint0_linear_7718_3345)" fillRule="evenodd" d="M8.43368.000488281c-1.79493 0-3.25 1.455081719-3.25 3.250001719v1.95923c-.63624.03038-1.27368.07669-1.9136.13895-.29781.02897-.56161.23676-.63526.54283-.18106.75244-.18106 1.4648 0 2.21724.07365.30607.33745.51386.63526.54283.63992.06226 1.27736.10858 1.9136.13895v4.45928c0 .4142.33578.75.75.75h2.02385c.41421 0 .75-.3358.75-.75V8.79547c.67172-.03019 1.34467-.07815 2.02047-.1439.2978-.02897.5616-.23676.6352-.54283.1811-.75244.1811-1.4648 0-2.21724-.0736-.30607-.3374-.51386-.6352-.54283-.6758-.06574-1.34875-.11371-2.02047-.1439v-.86872c0-.41421.33578-.75.75-.75h.91907c.4142 0 .75-.33578.75-.75V1.25049c0-.690358-.5596-1.250001719-1.24999-1.250001719H8.43368Z" clipRule="evenodd"></path>
        </g>
        <defs>
          <linearGradient id="paint0_linear_7718_3345" x1="12.279" x2="-2.834" y1="16.965" y2="10.063" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd600"></stop>
            <stop offset="1" stopColor="#FF007A"></stop>
          </linearGradient>
        </defs>
      </svg>
    </a>
  </li>
</ul>

</div>

          </div>
        </div>
      </div>
    </footer>





       {/* <ul className='flex justify-center mb-3 gap-4 mx-auto items-center w-[415px] bg-gray-100  md:flex md:justify-center md:w-full h-28 md:gap-6'>
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
            </ul> */}
  </>
}




