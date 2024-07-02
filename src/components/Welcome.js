import graduation from '../assests/graduation.png'
import flutter from '../assests/flutter.png'
import certificate from '../assests/certificate.png'
import support from '../assests/support.png'

export default function Welcome() {
  return (
    <>
    <div className="mt-6 md:mt-36">
      <div className="flex flex-col md:w-full h-52 md:flex md:flex-col justify- items-center ">
        <h1 className="font-semibold text-[30px] text-green-950 md:font-bold md:text-[65px]">Welcome To FutureDev</h1>
        <div className='w-full h-40 md:hidden'>
        <p className="items-center w-full pl-3 md:text-stone-700 text-[20px]">
          Our every course are designed in a way that they are easy to follow,
          latest in market, provide you support for questions and can help you to land a job.
        </p></div>
        <div className='hidden md:block'>
        <p className="items-center w-full h-[180px] pl-3 md:text-stone-700 text-[20px]">
          Our every course are designed in a way that they are easy to <br/>follow,
          latest in market, provide you support for questions and<br/> </p><p className='pl-24 ml-11'></p>
        </div>
      </div>
      </div>

        <div className='flex flex-col mx-auto md:flex md:flex-row justify-around'>
          <ul className='flex flex-col justify-center items-center mt-6 w-[390px] mx-auto border-2 h-[265px] md:w-[360px] rounded-lg'>
            <div>
              <img src={graduation} alt='graduation-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Awesome Teachers</h2>
            <div className='hidden md:block'>
            <p className='text-[18px]'>Professional coaches with a lot of teaching</p>
            <p className='text-[18px] ml-4'>experience provide all of our training</p>
            <p className='text-[18px] ml-32'>courses.</p>
            </div>
             <div className='pb-2  md:hidden'>
              <div className='w-[340px]'>
             <p className='text-[18px] pl-9'>Professional coaches with a lot of</p>
            <p className='text-[18px] pl-8'>teaching experience provide all of </p>
            <p className='text-[18px] pl-20'>our training courses.</p>
            </div>
             </div>


          </ul>
          <ul className='flex flex-col justify-center items-center h-[265px] mt-6 w-[390px] mx-auto border-2 rounded-lg md:w-[360px]'>
            <div>
              <img src={certificate} alt='certificate-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Global certificate</h2>
            <div className='hidden md:block'>
            <p className='text-[18px]'>All of our courses comes with certificate</p>
            <p className='text-[18px] ml-10'>and are globally accepted.</p>
            </div>


            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[18px] pl-12'>All of our courses comes with</p>
            <p className='text-[18px] pl-16'>certificate and are globally</p>
            <p className='text-[18px] pl-32'>accepted.</p>
            </div>
            </div>
          </ul>
          <ul className='flex flex-col justify-center items-center h-[265px] mt-6 w-[390px] mx-auto border-2 rounded-lg md:w-[360px]'>
            <div>
              <img src={flutter} alt='flutter-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Best Program</h2>
            <div className='hidden md:block'>
            <p className='text-[18px] ml-7'>We build courses on the newest    </p>
            <p className='text-[18px]'>technologies.It give students a sense  of </p>
            <p className='text-[18px] ml-20'>trust in learning</p>
            </div>


            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[18px] pl-11'>We build courses on the newest</p>
            <p className='text-[18px] pl-12'>technologies. It give students</p>
            <p className='text-[18px] pl-[57px]'>a sense of trust in learning.</p>
            </div>
            </div>
          </ul>
          <ul className='flex flex-col justify-center items-center h-[265px] w-[390px] mx-auto mt-6 border-2 rounded-lg md:w-[360px]'>
            <div>
              <img src={support} alt='support-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Student Support service</h2>
            <div className='hidden md:block'>
            <p className='text-[18px]'>We are with you on the whole journey from</p>
            <p className='text-[18px] ml-16'>enrolling to landing a job.</p>
            </div>

            <div className='pb-2 md:hidden'>
              <div className='w-[340px]'>
            <p className='text-[18px] pl-4'>We are with you on the whole journey</p>
            <p className='text-[18px] pl-16'>from enrolling to landing</p>
            <p className='text-[18px] pl-36' > a job.</p>
            </div>
            </div>
          </ul>
        </div>

    </>
  );
}
