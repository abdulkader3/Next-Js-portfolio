import Image from "next/image";
import React from "react";
import SkillsPic from "../../../public/Skills.png";

const Skill = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center justify-center bg-[#130f1a]     text-white font-['Preahvihear'] font-normal py-[170px] ">
       
        <h3 className=" text-[10px] md:text-[24px] ">
          I'm currently looking to join a cross-functional team
        </h3>
        <h3 className=" text-[8px] md:text-[16px] mb-[32px] ">
          that values improving people's lives through accessible design{" "}
        </h3>

        <div className=" md:w-[895px] w-[300px]  md:h-[657px] ">
          <Image src={SkillsPic} alt="demo" className="w-ful h-full" />
        </div>

      </div>
    </>
  );
};

export default Skill;
