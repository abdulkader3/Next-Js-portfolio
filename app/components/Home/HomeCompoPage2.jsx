'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import bgCircle from '../../../public/2ndBigSercal.png'
import card_background from '../../../public/card_background.png'
import cib from '../../../public/cib_icon.png'
import Aos from 'aos'

const HomeCompoPage2 = () => {

  useEffect(() => {
      Aos.init({
        duration: 800,
        once: true,
      });
    }, []);

  return (
    <>

    <div className="w-full h-screen flex relative ">
        <div className="bgCircle absolute z-0 top-[50%] left-[50%] transform translate-[-50%] ">
            <Image className='w-full h-full' src={bgCircle} alt='Circal'/>
        </div>



        <div className="all z-10  W-full px-20">

            <div className=" text-[40px] font-normal font-['Preahvihear'] mt-20  "> <h1> Work Experience </h1> </div>

            <div className="card w-full justify-center flex flex-wrap gap-14 mt-10 ">




                <div data-aos="fade-down-right" className=" flex  w-[570px] h-[192px] back bg-linear-to-r from-[#130428] to-[#38126D] rounded-[15px] shadow-[0px_-3px_1px_0px_#4F228D]
 ">

                    <div className="icon w-[121px] h-[115px] ">
                      <Image src={cib} alt='icon' className='w-full h-full' />
                    </div>

                    <div className="right">
                      <h2>CIB on the Mobile		</h2>
                      <h2 className='w-[218px] '>Take your client onboard seamlessly by our amazing tool of digital onboard process. </h2>

                      <button> LEARN MORE</button>
                    </div>
                    
                </div>

                <div data-aos="fade-down-left" className=" flex  w-[570px] h-[192px] back bg-linear-to-r from-[#130428] to-[#38126D] rounded-[15px] shadow-[0px_-3px_1px_0px_#4F228D]
 ">

                    <div className="icon w-[121px] h-[115px] ">
                      <Image src={cib} alt='icon' className='w-full h-full' />
                    </div>

                    <div className="right">
                      <h2>CIB on the Mobile		</h2>
                      <h2 className='w-[218px] '>Take your client onboard seamlessly by our amazing tool of digital onboard process. </h2>

                      <button> LEARN MORE</button>
                    </div>
                    
                </div>

                <div data-aos="fade-up-right" className=" flex  w-[570px] h-[192px] back bg-linear-to-r from-[#130428] to-[#38126D] rounded-[15px] shadow-[0px_-3px_1px_0px_#4F228D]
 ">

                    <div className="icon w-[121px] h-[115px] ">
                      <Image src={cib} alt='icon' className='w-full h-full' />
                    </div>

                    <div className="right">
                      <h2>CIB on the Mobile		</h2>
                      <h2 className='w-[218px] '>Take your client onboard seamlessly by our amazing tool of digital onboard process. </h2>

                      <button> LEARN MORE</button>
                    </div>
                    
                </div>

                <div data-aos="fade-up-left" className=" flex  w-[570px] h-[192px] back bg-linear-to-r from-[#130428] to-[#38126D] rounded-[15px] shadow-[0px_-3px_1px_0px_#4F228D]
 ">

                    <div className="icon w-[121px] h-[115px] ">
                      <Image src={cib} alt='icon' className='w-full h-full' />
                    </div>

                    <div className="right">
                      <h2>CIB on the Mobile		</h2>
                      <h2 className='w-[218px] '>Take your client onboard seamlessly by our amazing tool of digital onboard process. </h2>

                      <button> LEARN MORE</button>
                    </div>
                    
                </div>
            </div>



        </div>
    </div>
      
    </>
  )
}

export default HomeCompoPage2
