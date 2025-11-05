"use client";
import React from "react";
import Image from "next/image";

const Card = ({
    ImageForCard,
    Title,
    discriptions,
    buttonText,
    aosStyle,
}) => {
  return (
    <>
      <div
        data-aos={aosStyle}
        className=" flex md:px-[50px] px-10 gap-10 items-center gap-0 md:gap-[23px]  md:w-[570px] w-[300px] text-white h-[120px] md:h-[192px] back bg-linear-to-r from-[#130428] to-[#38126D] rounded-[15px] shadow-[0px_-3px_1px_0px_#4F228D]">
        
        <div className="icon w-[70px] md:w-[121px] h-[70] md:h-[115px] ">
          <Image src={ImageForCard} alt="icon" className="w-full h-full" />
        </div>

        <div className="right">
          <h2 className=" text-[10px] md:text-[26px] font-semibold "> {Title} </h2>
          
          <h2 className=" md:w-[218px] w-[120px] text-[6px] md:text-[8px] font-medium my-[10px] ">
            {discriptions}
          </h2>

          <button className=" text-[8px] px-[14px] py-[6px] md:px-[18px] md:py-[10px] bg-[#2C1250] border-[#693B93] border md:rounded-[10px] rounded-[4px] ">
           {buttonText}
          </button>


        </div>
      </div>
    </>
  );
};

export default Card;
