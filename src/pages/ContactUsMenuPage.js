export default function ContactUsmenuPage() {
  return (
    <>
      <div className="mt-7 h-36 md:w-full md:h-72 md:mt-8">
        <div className="flex flex-col h-36 w-[98%] px-2  md:w-full md:h-60 md:flex md:flex-col items-center ">
          <h1 className="font-semibold text-[30px] text-green-950 md:font-bold md:text-[65px]">
            Our Best Courses
          </h1>
          <div className="w-full">
            <p className="items-center text-[15px]] mt-1 md:hidden">
              Each of our courses is designed to be easy to navigate up-to-date
              on the industry,to assist you with questions and to help you find
              a job.
            </p>
          </div>
          <p className="hidden md:block md:text-stone-700 text-[20px]">
            Each of our courses is designed to be easy to navigate.
            <br />
            up-to-date on the industry,
            <br />
            to assist you with questions and to help you find a job.
          </p>
        </div>
      </div>
    </>
  );
}
