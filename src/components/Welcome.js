import graduation from '../assests/graduation.png'
import flutter from '../assests/flutter.png'
import certificate from '../assests/certificate.png'
import support from '../assests/support.png'

export default function Welcome() {
  return (
    <>
    <div className="mt-64 md:mt-36">
      <div className="flex flex-col  md:w-full h-60 md:flex md:flex-col justify- items-center ">
        <h1 className="font-semibold text-[30px] text-green-950 md:font-bold md:text-[65px]">Welcome To Academy</h1>
        <p className="items-center px-3 ml-3 md:text-stone-700 text-[20px]">
          Our every course are designed in a way that they are easy to <br />
          follow, latest in market, provide you support for questions and
          <br /> can help you to land a job.
        </p>
      </div>
      </div>

        <div className='flex flex-col mx-auto md:flex md:flex-row justify-around'>
          <ul className='flex flex-col justify-center items-center mt-6 border-2 rounded-lg'>
            <div>
              <img src={graduation} alt='graduation-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Awesome Teachers</h2>
            <p className='text-[18px]'>Professional coaches with a lot of teaching</p>
            <p className='text-[18px]'>experience provide all of our training</p>
            <p className='text-[18px]'>courses.</p>
          </ul>
          <ul className='flex flex-col justify-center items-center mt-6 border-2 rounded-lg'>
            <div>
              <img src={certificate} alt='certificate-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Global certificate</h2>
            <p className='text-[18px]'>All of our courses comes with certificate</p>
            <p className='text-[18px]'>and are globally accepted.</p>
          </ul>
          <ul className='flex flex-col justify-center items-center mt-6 border-2 rounded-lg'>
            <div>
              <img src={flutter} alt='flutter-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Best Program</h2>
            <p className='text-[18px]'>We build courses on the newest</p>
            <p className='text-[18px]'>technologies. It give students a sense of</p>
            <p className='text-[18px]'>trust in learning</p>
          </ul>
          <ul className='flex flex-col justify-center items-center mt-6 border-2 rounded-lg'>
            <div>
              <img src={support} alt='support-logo'/>
            </div>
            <h2 className='font-semibold text-[25px]'>Student Support service</h2>
            <p className='text-[18px]'>We are with you on the whole journey from</p>
            <p className='text-[18px]'>enrolling to landing a job.</p>
          </ul>
        </div>

    </>
  );
}
