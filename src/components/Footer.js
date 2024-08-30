import { Link } from "react-router-dom";
import logo from "../assests/whiteLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-prime1 border-t border-gray-50 text-white py-12 mt-14 md:mt-0">
        <div className="md:w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left Section - Company Logo and Google Map */}
            <div className="flex flex-col mb-8  md:w-1/3">
              <Link to="/" className="flex items-center mb-4 md:mb-0 md:mt-10">
                <img className=" w-[150px]" src={logo} alt="Company Logo" />
              </Link>
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
                  <h2 className="text-lg font-semibold text-orange-600">
                    Contact Us
                  </h2>
                  <ul>
                    <li>
                      Phone:
                      <br />
                      <a href="tel:+7016270941" className="hover:text-org1">
                        7016270941
                      </a>{" "}
                      /{" "}
                      <a href="tel:+7016613842" className="hover:text-org1">
                        7016613842
                      </a>
                    </li>
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:info@example.com"
                        className="hover:text-org1"
                      >
                        futuredevacademy@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start mb-4 md:mb-0">
                {/* <img className="h-6 w-6 mr-2" src={location2} alt="Address Icon" /> */}
                <div>
                  <h2 className="text-lg font-semibold text-orange-600">
                    Address
                  </h2>
                  <p className="">
                    SAX118, First Floor,
                    <br /> 17 wali Road, Opp. GEB Office,
                    <br /> Adipur, Gandhidham, Kutch-370205
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4 md:mb-0">
                {/* <img className="h-6 w-6 mr-2" src={timer2} alt="Clock Icon" /> */}
                <div>
                  <h2 className="text-lg font-semibold text-orange-600">
                    Class-Hours
                  </h2>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="xl:text-center w-1/2 xl:w-1/4">
                <h2 className="text-lg font-semibold text-orange-600">
                  About Our Academy
                </h2>
                <p className="mt-2 text-gray-300">
                  At Our Academy, we are dedicated to providing top-notch
                  education and training in various fields.
                </p>
                <ul className="flex flex-row justify-evenly my-6">
                  <li className="transition-transform duration-300 hover:scale-110">
                    <a
                      href="https://www.instagram.com/futuredev_academy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        height="25"
                        width="25"
                        strokeWidth="1"
                      >
                        <g id="instagram-logo">
                          <path
                            fill="url(#paint0_linear_6582_12242)"
                            fillRule="evenodd"
                            d="M12.4571 1.76417C15.4553 1.61319 19.2778 1.5 24 1.5c4.7222 0 8.5447.1132 11.5429.26417C41.433 2.06077 45.9392 6.567 46.2358 12.457c.151 2.9983.2642 6.8208.2642 11.543 0 4.7222-.1132 8.5447-.2642 11.543-.2966 5.89-4.8028 10.3962-10.6929 10.6928-2.9982.151-6.8207.2642-11.5429.2642-4.7222 0-8.5447-.1132-11.5429-.2642C6.567 45.9392 2.06077 41.433 1.76417 35.5429 1.61319 32.5447 1.5 28.7222 1.5 24c0-4.7222.1132-8.5447.26417-11.543C2.06077 6.56699 6.567 2.06077 12.4571 1.76417ZM35 10c0-1.10457.8954-2 2-2h1c1.1046 0 2 .89543 2 2 0 1.1046-.8954 2-2 2h-1c-1.1046 0-2-.8954-2-2Zm-11 6c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8Zm-12 8c0-6.6274 5.3726-12 12-12s12 5.3726 12 12-5.3726 12-12 12-12-5.3726-12-12Z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_6582_12242"
                            x1="50.4"
                            x2="-10.299"
                            y1="56.031"
                            y2="12.915"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ffd600"></stop>
                            <stop offset="1" stopColor="#ff007a"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="transition-transform duration-300 hover:scale-110">
                    <a
                      href="https://api.whatsapp.com/send?phone=917016613842"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="25"
                        width="25"
                        strokeWidth="1"
                      >
                        <g id="Whatsapp-Logo--Streamline-Sharp-Gradient">
                          <path
                            fill="url(#paint0_linear_246_3146)"
                            fillRule="evenodd"
                            d="M4.36819 3.36827C6.52486 1.2116 9.44993 0 12.4999 0c3.05 0 5.9751 1.2116 8.1317 3.36827 2.1567 2.15667 3.3683 5.08174 3.3683 8.13173 0 3.05-1.2116 5.9751-3.3683 8.1317C18.475 21.7884 15.5499 23 12.4999 23c-1.601 0-3.16769-.3339-4.60676-.963l-6.255 1.5342-1.6024955.3931.3930615-1.6025 1.534234-6.255C1.3338 14.6677.999917 13.101.999917 11.5c0-3.04999 1.211603-5.97506 3.368273-8.13173ZM12.3792 14.5324l.8727-1.4624.1971-.3301.3696.1056 3.5087 1.0025.4098.1171-.0507.4231-.3411 2.8474-.0558.4657-.4683-.026c-1.6871-.0934-3.3577-.5691-4.8707-1.4276-.8532-.4841-1.6557-1.0896-2.3821-1.816-.72641-.7264-1.3319-1.5289-1.816-2.3821-.85849-1.513-1.33417-3.18362-1.42763-4.87072l-.02594-.46831.4657-.05579 2.84733-.34112.42314-.05069.1171.40978 1.0025 3.50875.1056.3696-.3301.1971-1.46232.8727c.37289.5668.80882 1.1046 1.30782 1.6037.4991.499 1.0369.9349 1.6036 1.3078Z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_246_3146"
                            x1="26.077"
                            x2="-6.247"
                            y1="29.04"
                            y2="6.079"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ffd600"></stop>
                            <stop offset="1" stopColor="#FF007A"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>

                  <li className="transition-transform duration-300 hover:scale-110">
                    <a
                      href="https://www.facebook.com/profile.php?id=61560387369650"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        height="25"
                        width="25"
                        strokeWidth="1"
                      >
                        <g id="facebook-2--media-facebook-social">
                          <path
                            fill="url(#paint0_linear_7718_3345)"
                            fillRule="evenodd"
                            d="M8.43368.000488281c-1.79493 0-3.25 1.455081719-3.25 3.250001719v1.95923c-.63624.03038-1.27368.07669-1.9136.13895-.29781.02897-.56161.23676-.63526.54283-.18106.75244-.18106 1.4648 0 2.21724.07365.30607.33745.51386.63526.54283.63992.06226 1.27736.10858 1.9136.13895v4.45928c0 .4142.33578.75.75.75h2.02385c.41421 0 .75-.3358.75-.75V8.79547c.67172-.03019 1.34467-.07815 2.02047-.1439.2978-.02897.5616-.23676.6352-.54283.1811-.75244.1811-1.4648 0-2.21724-.0736-.30607-.3374-.51386-.6352-.54283-.6758-.06574-1.34875-.11371-2.02047-.1439v-.86872c0-.41421.33578-.75.75-.75h.91907c.4142 0 .75-.33578.75-.75V1.25049c0-.690358-.5596-1.250001719-1.24999-1.250001719H8.43368Z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_7718_3345"
                            x1="12.279"
                            x2="-2.834"
                            y1="16.965"
                            y2="10.063"
                            gradientUnits="userSpaceOnUse"
                          >
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

        <div className="mt-4  md:mt-2  w-[415px] relative group md:w-[430px]">
          <p className="text-sm px-12 md:px-16">
            © Copyrights 2024 FutureDev All rights reserved
          </p>
          <div className="absolute hidden text-sm  group-hover:block ">
            <p className="text-sm px-12 md:px-16 text-org1">
              Developed And Maintained By Mr. Sandeep Puri
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
