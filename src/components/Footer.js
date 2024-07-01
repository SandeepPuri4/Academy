import call2 from '../assests/call2.png'
import location2 from '../assests/location2.png'
import timer2 from '../assests/timer3.png'
import logo from '../assests/logo.png'



export default function Footer() {
  return <> 
       <footer className="h-[800px] w-full md:h-52 ">
             <div className='flex flex-col justify-between h-[700px] md:flex md:flex-row md:justify-around md:h-52'>
           <div className='flex flex-row justify-center'>
            <p>
              <img src={logo} alt='academy-logo' className='h-[180px] w-[180px] rounded-full' />
            </p>
           </div>
              <div className='flex flex-row justify-center mt-12'>
                <p className='mr-6 mt-4'>
                <img src={call2} alt='call2-logo' />
                </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Call</h3>
                  <p className='font-semibold text-[17px]'>8879156685<br/>0000000000</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12'>
                <p className='mr-6 mt-4'>
                <img src={location2} alt='call2-logo' />
                </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Adderess</h3>
                  <p className='font-semibold text-[17px]'>405, colaba<br/>cuffpared</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12'>
                <p className='mr-6 mt-4'>
                <img src={timer2} alt='call2-logo'/>
                </p>
                <div>
                  <h3 className='font-semibold text-[20px]'>Work-Time</h3>
                  <p className='font-semibold text-[17px]'>9 Am to <br/>8 Pm</p>
                </div>
              </div>
              <div className='flex flex-row justify-center mt-12'>
                
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
  </>
}