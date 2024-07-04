import graduation from '../assests/graduation.png'
import flutter from '../assests/flutter.png'
import certificate from '../assests/certificate.png'
import support from '../assests/support.png'

export default function Welcome() {
  return (
    <>
    <div className="mt-8 w-[415px] mx-auto md:w-[75rem] md:h-[250px] md:mt-1 ">
      <div className="flex flex-col h-40  md:h-52 md:flex md:flex-col justify- items-center md:w-[750px] mx-auto ">
        <h1 className="font-semibold text-[30px] text-green-950 md:font-bold md:text-[65px] md:w-[95%]">Welcome To FutureDev</h1>
        <div className='w-[405px] mx-3 md:hidden md:h-40 md:w-[250px]'>
        <p className="items-center w-full px-4 md:text-stone-700 text-[17px]">
          Our every course are designed in a way that they</p>
        <p className="items-center w-full px-3 text-[17px]">
          are easy to follow, latest in the market,provide you</p>
        <p className="items-center w-full px-4  text-[17px]">
          support for questions and can help you to land a</p>
        <p className="items-center w-full px-48  text-[17px]">
          job.</p>
          
          
          </div>
        <div className='hidden md:block'>
        <p className="items-center w-full text-[15px] h-[180px] pl-3  md:text-[18px]">
          Our every course are designed in a way that they are easy to <br/>follow,
          latest in market, provide you support for questions and <br/>can help you land a job.</p>
        </div>
      </div>
      </div>

        <div className='flex flex-col w-[415px] mx-auto md:flex md:flex-row justify-around gap-3 md:w-[75rem]'>
          <ul className='flex flex-col justify-center h-[220px] items-center mt-6 w-[355px] mx-auto border-2 md:h-[265px] md:w-[25%] rounded-md'>
            <div>
              <img src={graduation} alt='graduation-logo'/>
            </div>
            <h2 className='font-semibold text-[20px]   md:font-semibold md:text-[20px]'>Awesome Teachers</h2>
           <div className='hidden  md:block'>
              <div className='w-[340px]'>
             <p className='text-[17px] pl-[52px]'>Professional coaches with a lot of</p>
            <p className='text-[17px] pl-[50px]'>teaching experience provide all of </p>
            <p className='text-[17px] pl-24'>our training courses.</p>
            </div>
             </div>

             <div className='pb-2  md:hidden'>
              <div className='w-[340px]'>
             <p className='text-[16px] pl-[52px]'>Professional coaches with a lot of</p>
            <p className='text-[16px] pl-[50px]'>teaching experience provide all of </p>
            <p className='text-[16px] pl-24'>our training courses.</p>
            </div>
             </div>


          </ul>
          <ul className='flex flex-col justify-center h-[220px] items-center md:h-[265px] mt-6 w-[355px] mx-auto border-2 rounded-md md:w-[25%]'>
            <div>
              <img src={certificate} alt='certificate-logo'/>
            </div>
            <h2 className=' font-semibold text-[20px]  md:font-semibold md:text-[25px]'>Global certificate</h2>

            <div className='hidden md:block'>
              <div className='w-[340px]'>
            <p className='text-[17px] pl-[60px]'>All of our courses comes with</p>
            <p className='text-[17px] pl-20'>certificate and are globally</p>
            <p className='text-[17px] pl-[130px]'>accepted.</p>
            </div>
            </div>


            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[16px] pl-[70px]'>All of our courses comes with</p>
            <p className='text-[16px] pl-20'>certificate and are globally</p>
            <p className='text-[16px] pl-[130px]'>accepted.</p>
            </div>
            </div>
          </ul>
          <ul className='flex flex-col justify-center items-center h-[220px] mt-6 w-[355px] md:h-[265px] mx-auto border-2 rounded-lg md:w-[25%]'>
            <div>
              <img src={flutter} alt='flutter-logo'/>
            </div>
            <h2 className='font-semibold text-[20px] md:font-semibold md:text-[25px]'>Best Programs</h2>
            {/* <div className='hidden md:block'>
            <p className='text-[18px] ml-7'>We build courses on the newest    </p>
            <p className='text-[18px]'>technologies.It give students a sense  of </p>
            <p className='text-[18px] ml-20'>trust in learning</p>
            </div> */}

          <div className='hidden md:block'>
              <div className='w-[340px]'>
            <p className='text-[17px] pl-14'>We build courses on the newest</p>
            <p className='text-[17px] pl-16'>technologies. It give students</p>
            <p className='text-[17px] pl-[73px]'>a sense of trust in learning.</p>
            </div>
            </div>


            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[16px] pl-14'>We build courses on the newest</p>
            <p className='text-[16px] pl-16'>technologies. It give students</p>
            <p className='text-[16px] pl-[73px]'>a sense of trust in learning.</p>
            </div>
            </div>
          </ul>
          <ul className='flex flex-col justify-center items-center h-[220px] w-[355px] md:h-[265px] mx-auto mt-6 border-2 rounded-lg md:w-[25%] '>
            <div>
              <img src={support} alt='support-logo'/>
            </div>
            <h2 className='font-semibold text-[20px]  md:font-semibold md:text-[25px]'>Student Support service</h2>
            {/* <div className='hidden md:block'>
            <p className='text-[18px]'>We are with you on the whole journey from</p>
            <p className='text-[18px] ml-16'>enrolling to landing a job.</p>
            </div> */}

           <div className='hidden md:block'>
              <div className='w-[340px]'>
            <p className='text-[16px] pl-8'>We are with you on the whole journey</p>
            <p className='text-[16px] pl-20'>from enrolling to landing</p>
            <p className='text-[16px] pl-36' > a job.</p>
            </div>
            </div>

            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[16px] pl-8'>We are with you on the whole journey</p>
            <p className='text-[16px] pl-20'>from enrolling to landing</p>
            <p className='text-[16px] pl-36' > a job.</p>
            </div>
            </div>
          </ul>
        </div>

    </>
  );
}
