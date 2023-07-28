import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import rocket from "../assets/technology/image-launch-vehicle-portrait.jpg"
import capsule from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceport from "../assets/technology/image-spaceport-portrait.jpg"
import { Space } from '../../data'

export const Technology = () => {

    const [technologyIndex,setTechnologyIndex]=useState(0)
    const data=Space.technology;
    console.log(data);

  return (
    <section className='desktopBackgroundTechnology  w-full h-screen flex flex-col items-center fixed'>
      <Navbar />
      <section className=' min-w-[1280px] w-full h-full min-h-[calc(100vh-140px)]'>
        <h1 className='w-fit my-6 md:mt-10 md:my-0 lg:mt-16 lg:ml-40 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 text-[28px] tracking-[4.725px] leading-[34px] text-white uppercase'><span className='text-white/40 mr-3 font-extrabold'>03  </span>SPACE LAUNCH 101</h1>

        <section className=' grid grid-cols-2 place-items-center place-content-center '>
          <div className=' flex gap-16'>
            <div className=' flex flex-col gap-6'>
              <p onClick={()=> setTechnologyIndex(0)} className={`flex items-center justify-center w-20 h-20 rounded-full border border-white/50 backdrop-blur-sm ${ technologyIndex===0? "bg-white text-black":" text-white bg-none"}  text-3xl font-bold `}>1</p>
              <p onClick={()=> setTechnologyIndex(1)} className={`flex items-center justify-center w-20 h-20 rounded-full border border-white/50 backdrop-blur-sm ${ technologyIndex===1? "bg-white text-black":" text-white bg-none"}  text-3xl font-bold `}>2</p>
              <p onClick={()=> setTechnologyIndex(2)} className={`flex items-center justify-center w-20 h-20 rounded-full border border-white/50 backdrop-blur-sm ${ technologyIndex===2? "bg-white text-black":" text-white bg-none"} text-3xl font-bold `}>3</p>

            </div>
            <div className=' flex flex-col items-start gap-3 w-[430px] text-white'>
              <h3 className=' text-base leading-8 text-[#D0D6f9]'>THE TERMINOLOGY…</h3>
              <h1 className=' text-[56px]'>{data[technologyIndex].name}</h1>
              <p className=' text-[15px] leading-8 text-[#D0D6f9]'>{data[technologyIndex].description}</p>

            </div>

          </div>
          <img src={technologyIndex===0?(rocket):technologyIndex===1? (spaceport):(capsule)} />

        </section>
      </section>
    </section>
  )
}
