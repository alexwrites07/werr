import sold from "../../../assets/SoldGraph/SoldGraph.svg";
import "../../../App.css";

export default function SoldGraph() {
  return (
    <div className="custom-font w-full h-full flex flex-col justify-between bg-black rounded-[20px] md:mr-4 ml-4 md:ml-0 mr-4">
      <div className="flex flex-row gap-2 w-full h-full place-items-end pb-3">
        <div className="w-[6%] h-[30%] rounded-r-[30px] bg-white"></div>
        <div className="w-[13%] h-[50%] rounded-[30px] bg-white text-[#8AA6AA] text-[12px] flex justify-center place-items-end pb-2">
          <p>2018</p>
        </div>
        <div className="w-[13%] h-[40%] rounded-[30px] bg-white text-[#8AA6AA] text-[12px] flex justify-center place-items-end pb-2">
          <p>2019</p>
        </div>
        <div className="w-[13%] h-[70%] rounded-[30px] bg-[#8AA6AA] text-white text-[12px] flex justify-center place-items-end pb-2">
          <p>2020</p>
        </div>
        <div className="w-[13%] h-[76%] rounded-[30px] bg-white text-[#8AA6AA] text-[12px] flex justify-center place-items-end pb-2">
          <p>2021</p>
        </div>
        <div className="w-[13%] h-[80%] rounded-[30px] bg-white text-[#8AA6AA] text-[12px] flex justify-center place-items-end pb-2">
          <p>2022</p>
        </div>
        <div className="w-[13%] h-[88%] rounded-[30px] bg-white text-[#8AA6AA] text-[12px] flex justify-center place-items-end pb-2">
          <p>2023</p>
        </div>
        
      </div>
      <div className="bg-white rounded-[15px] m-1 flex flex-row justify-between p-2 pl-5">
        <p className="font-extrabold text-[18px]">
          Machinery sold over <br></br>years
        </p>
        <div className="flex justify-center place-items-center">
          <img src={sold} className="h-10"></img>
        </div>
      </div>
    </div>
  );
}
