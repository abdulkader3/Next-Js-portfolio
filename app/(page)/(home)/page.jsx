'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import Developer from "@/app/components/others/Developer";
import title from "../../../public/title.png";
import developerTitle from "../../../public/im_developer_at_cit.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import HomeCompoPage2 from "@/app/components/Home/HomeCompoPage2";

const page = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="bg-[#130f1a] w-full min-h-screen px-4 md:px-50 relative">

        <div data-aos="fade-right" className="first pt-[80px] md:pt-[107px]">
          <Developer />
          <div className="md:w-[391px] md:h-[177px] w-[181px] absolute top-80  md:top-50 right-10 md:right-70  ">
            <Image src={title} alt="tilel" className=" w-full h-full" />
          </div>
        </div>

        <div data-aos="fade-up" className="Im-a-developer flex flex-col items-center mt-[360px] md:mt-[450px] ">
          <Image
            src={developerTitle}
            width={674}
            height={114}
            alt="developer title"
            className=" ml-16 md:ml-0 max-w-full h-auto"
          />
          <div className="discreption w-full md:w-[892px] mt-8 md:mt-[69.96px] text-[12px] md:text-[22px] font-normal font-['Preahvihear'] leading-[2] px-2 md:px-0">
            <p className="text-white text-center md:text-left">
              A self-taught React and Next.js developer with 3+ years of
              experience building fast, responsive, and user-centered web
              applications. I combine clean UI/UX design with scalable frontend
              architecture to create products that align user needs with
              business goals.
            </p>
          </div>
        </div>

      </div>






      <div className="w-full h-screen ">
        <HomeCompoPage2/>
      </div>
    </>
  );
};

export default page;
