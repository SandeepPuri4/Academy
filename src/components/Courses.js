// import flutter from '../assests/flutter.png'
import node from '../assests/node.png'
import python from '../assests/python.png'
import reactCourse from '../assests/reactcourse.png'
import java from '../assests/java_course.png';
import angular from '../assests/Angular.png'
import digital from '../assests/digitalmarketing.png'
import html from '../assests/web_design.png'
import web from '../assests/webicon.png'
import flutter from '../assests/flutterImg.png'


export default function Courses() {
  return <>
          <div className="mt-7 h-36 md:w-full md:h-72 md:mt-8">
          <div className="flex flex-col h-28  md:w-full md:h-60 md:flex md:flex-col items-center ">
        <h1 className="font-semibold text-[30px] text-green-950 md:font-bold md:text-[65px]">Our Best Courses</h1>
        <div className='w-full'>
        <p className="items-center px-2 mt-1 md:hidden">
        Each of our courses is designed to be easy to navigate.
        up-to-date on the industry,
        to assist you with questions and to help you find a job.
        </p></div>
        <p className="hidden md:block md:text-stone-700 text-[20px]">
        Each of our courses is designed to be easy to navigate.<br/>
        up-to-date on the industry,<br/>
        to assist you with questions and to help you find a job.
        </p>
      </div>
    </div>
       <div className='mt-2 h-[165rem] md:h-[70rem]'>
        <div className='flex flex-col justify-between md:flex md:flex-row md:justify-around md:flex-wrap'>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Node.js Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={node} alt='node-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Python Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={python} alt='python-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete React.js Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={reactCourse} alt='react-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete web designing</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={html} alt='web-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Java Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={java} alt='java-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Degital marketing</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Degital marketing</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={digital} alt='digital-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Angular Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={angular} alt='angular-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className=' h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-7rem items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Node.js Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7'>
            <img src={node} alt='node-image' className='p-3 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
         <div className='hidden md:block h-[345px] md:h-[400px]'> 
          <div className='flex justify-center flex-col h-[7rem] items-start'>
            <h3 className='font-semibold text-xl ml-5'>Complete Node.js Course</h3>
            <div className='flex flex-row pt-1 ml-5'><p>Web development</p><img src={web} alt='web-logo' className='w-[25px] h-[25px] ml-2'/></div>
            <p className='w-[80%], h-7 border-green-900'>
            <img src={flutter} alt='node-image' className='p-3 w-[400px] h-[310px] border-green-800 transition-transform duration-300 hover:scale-105' />
            </p>
          </div>
        </div>
        </div>
         </div>
  
  </>
}