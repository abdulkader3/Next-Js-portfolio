"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import bgCircle from "../../../public/2ndBigSercal.png";
import card_background from "../../../public/card_background.png";
import cib from "../../../public/cib_icon.png";
import Aos from "aos";
import Card from "./Card";

const HomeCompoPage2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full full flex relative ">


        {/* backgroud cercal */}
        <div className="bgCircle absolute z-0 top-[50%] left-[50%] transform translate-[-50%] ">
          <Image className="w-full h-full" src={bgCircle} alt="Circal" />
        </div>
        {/* backgroud cercal */}

        <div className="all z-10  W-full md:px-20 px-0 ">



          <div className=" text-[18px] md:text-[40px] font-normal font-['Preahvihear'] md:mt-20 mt-10 text-white  ">
            {" "}
            <h1> Work Experience </h1>{" "}
          </div>




          <div className="card w-full justify-center flex flex-wrap gap-14 mt-10 ">


            <Card aosStyle={"fade-down-right"} ImageForCard={cib} Title={"CIB on the Mobile"} discriptions={"Take your client onboard seamlessly by our amazing tool of  digital onboard process."} buttonText={"LEARN MORE"} />
            
            <Card aosStyle={"fade-down-left"} ImageForCard={cib} Title={"CIB on the Mobile"} discriptions={"Take your client onboard seamlessly by our amazing tool of  digital onboard process."} buttonText={"LEARN MORE"} />
            
            <Card aosStyle={"fade-up-right"} ImageForCard={cib} Title={"CIB on the Mobile"} discriptions={"Take your client onboard seamlessly by our amazing tool of  digital onboard process."} buttonText={"LEARN MORE"} />
            
            <Card aosStyle={"fade-up-left"} ImageForCard={cib} Title={"CIB on the Mobile"} discriptions={"Take your client onboard seamlessly by our amazing tool of  digital onboard process."} buttonText={"LEARN MORE"} />

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCompoPage2;
