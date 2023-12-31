import world from "../../../assets/Who_are_we/world.svg";
import world_mobile from "../../../assets/Who_are_we/world_mobile.svg";
// import "../../../App.css";
import "./hstyle.css"
export default function Who_are_we() {
  return (
    <div className="custom-font flex md:flex-row flex-col md:justify-between">
      <div className="md:hidden text-center p-4">
        <p className="md:text-[35px] text-[35px] font-bold">Who Are We?</p>
        <p className="md:text-[20px] md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
      </div>
      
      <div className="relative md:h-[90%] justify-center place-items-center md:text-[16px] text-[16px] atom">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <img src={world} className="hidden md:block" alt="world"></img>
        <img
          src={world_mobile}
          className="md:hidden block"
          alt="world_mobile"
        ></img>
         <div className='atom '>
         <br></br><br></br><br></br><br></br><br></br><br></br>
</div>
<div className='electron'></div>
       <div className='electron'></div>
       <div className='electron'></div>
        {/* <div class="absolute inset-0 animate-border h-4 w-full"></div> */}
        {/* <div className="absolute top-0 flex justify-center items-center h-screen">
      <svg
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="text-indigo-500"
      >
        <path
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          fill="transparent"
          stroke="#22DAE5" 
          strokeWidth="5"
        />
      </svg>
    </div> */}
     <div className="ty">
        <p className="absolute md:top-[90%] top-[95%]  font-bold md:right-[45%] right-[45%] bg-white rounded-[20px] px-4 border-black border-2 p-2">
          india
        </p>
        <p className="absolute md:top-[75%] top-[82%] font-bold md:right-[60%] right-[45%] bg-white rounded-[20px] px-4 border-black border-2 p-1">
          Ghana
        </p>
        <p className="absolute md:top-[74%] top-[82%] font-bold md:right-[20%] right-[20%] bg-white rounded-[20px] px-4 border-black border-2 p-2">
          Algeria
        </p>
        <p className="absolute md:top-[105%] top-[112%]  font-bold md:right-[60%] right-[45%] bg-white rounded-[20px] px-4 border-black border-2 p-2">
          Africa
        </p>
        <p className="absolute md:top-[107%] top-[110%] font-bold md:right-[6%] right-[15%] bg-white rounded-[20px] px-4 border-black border-2 p-2">
          Indonesia
        </p>
        <p className="absolute md:top-[127%] top-[128%] font-bold md:right-[36%] right-[30%] bg-white rounded-[20px] px-4 border-black border-2 p-0.5">
          Philippines
        </p>
      </div>
      </div>
      <div className="w-full flex md:flex-col p-10 flex-col">
        {/* for desktop view */}
        <div className="hidden md:block">
          <p className="md:text-[35px] font-bold">Who Are We?</p>
          <p className="md:text-[12px] md:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
        </div>

        {/* desktop view */}
        <div className="md:flex md:flex-col overflow-x-auto md:justify-start md:gap-20">
          {/* 21 countries */}
          <div className="flex md:flex-row gap-1 flex-row md:mt-10">
            <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="hidden md:block md:w-[5px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[25px] text-[25px]">21+ Countries</p>
                <p>We have our presence in 21+ Countries</p>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4">
              {/* line */}
              <div className="hidden md:block md:w-[5px] w-[10px] h-[170px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
              <div className="md:w-[75%] md:text-[16px] w-full">
                <p className="md:text-[25px] text-[25px]">21+ Countries</p>
                <p>We have our presence in 21+ Countries</p>
              </div>
            </div>
          </div>

          {/* this is hidden in mobile view */}
          <div className="md:flex md:flex-row gap-4 hidden">
            {/* line */}
            <div className="w-[5px] md:w-[8px] md:h-[80px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] md:text-[16px]">
              <p className="md:text-[25px] ">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
            {/* line */}
            <div className="w-[5px] md:h-[80px] md:w-[8px] bg-[#8AA6AA] gap-4"></div>
            <div className="md:w-[75%] w-[90%] md:text-[16px]">
              <p className="md:text-[25px]">21+ Countries</p>
              <p>We have our presence in 21+ Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
