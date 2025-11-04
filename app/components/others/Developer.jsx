import Image from 'next/image'
import React from 'react'
import profile_bg from '../../../public/Gradient.png'
import Me from '../../../public/Me.png'
import arrow from '../../../public/Arrow.png'
import myName from '../../../public/Hello! I Am Abdul Kader.png'

const Developer = () => {
  return (
    <>

    <div className="left relative  ">

      {/* Name image */}

      <div className="me absolute md:top-0 top-16 right-4 md:right-[550px]  ">
        <h2 className=' md:text-[19px] font-["Preahvihear"] text-white text-[9px] '> Hello! I Am Abdul Kader </h2>
      </div>

      {/* Arrow image */}

      <div className="me absolute  right-[40%] top-14 md:top-0 md:right-[70%] md:w-[90.78px] w-[50px] ">
        <Image src={arrow} alt='profile-bg' className=" w-full h-full" />
      </div>

      {/* Background image */}

        <div className=" md:w-[385px] md:h-[481px] w-[290px] top-0 left-0 absolute z-[-10] ">
          <Image src={profile_bg} alt='profile-bg' className=" w-full h-full " />
        </div>
      


      {/* Me image */}

      <div className="me absolute w-[120px] h-[121px] md:w-[258px] md:h-[259px] top-26 left-16 ">
        <Image src={Me} alt='profile_me' className='w-full h-full'/>
      </div>


    </div>
      
    </>
  )
}

export default Developer
