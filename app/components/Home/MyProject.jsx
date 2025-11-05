"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Project1 from "../../../public/demo1.png";
import Project2 from "../../../public/demo2.png";
import Aos from "aos";

const MyProject = ({}) => {

    useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full h-fit ">


        {/* project 01 */}

        <div data-aos="fade-up" className="project1 flex md:justify-center  w-full">
            
          <div className=" h-auto relative ">
            <Image src={Project1} alt="my project" className="w-ful h-full" />

            <div className="textBox text-white font-semibold absolute md:top-50 md:left-0 top-10 left-2 ">
              <p className=" text-[8px] md:text-[16px] text-[#9857D3] ">Featured Project</p>
              <p className=" text-[16px] md:text-[34px] ">Example Project</p>
            </div>

            <div className="textBox text-white font-semibold absolute md:top-[330px] top-21 left-1 ">
              <p className=" text-[5px] md:text-[18px] w-[170px] md:w-[585px] ">
                {" "}
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.{" "}
              </p>
            </div>
          </div>

        </div>
        
        
        {/* project 02 */}
        <div data-aos="fade-up" className="project1 flex md:justify-center w-full text-white">
            
          <div className=" h-auto relative ">
            <Image src={Project2} alt="my project" className="w-ful h-full" />

            <div className="textBox font-semibold absolute md:top-40 md:right-0 top-8 right-[5px] ">
              <p className=" text-[8px] md:text-[16px] text-[#9857D3] ">Featured Project</p>
              <p className=" text-[16px] md:text-[34px] ">Example Project</p>
            </div>

            <div className="textBox font-semibold absolute md:top-[280px] md:right-10 top-[68px] right-[-18px] ">
              <p className="text-[5px] md:text-[18px] w-[170px] md:w-[585px] ">
                {" "}
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.{" "}
              </p>
            </div>
          </div>

        </div>

       
      </div>
    </>
  );
};

export default MyProject;
