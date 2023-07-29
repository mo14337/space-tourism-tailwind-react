import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import dogulas from "../assets/crew/image-douglas-hurley.png"
import Mark from "../assets/crew/image-mark-shuttleworth.png"
import Victor from "../assets/crew/image-victor-glover.png"
import Ansari from "../assets/crew/image-anousheh-ansari.png"
import { Space } from '../../data'

export const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0)
  const data = Space.crew;
  console.log(data);

  return (
    <section className=' desktopBackgroundCrew  w-full h-screen flex flex-col items-center fixed'>
      <Navbar />
      <section className='max-w-[1280px] w-full  min-h-[calc(100vh-140px)] h-full flex flex-col'>
        <h1 className='w-fit my-6 md:my-10 lg:my-0 lg:mt-16 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 lg:ml-0 text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>02</span> MEET YOUR CREW</h1>
        <section className=' w-full h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 place-content-center place-items-center'>
          <div className=' text-white flex flex-col items-start w-[500px] lg:w-[550px] gap-12 lg:gap-24'>
            <div className=' flex flex-col items-center justify-center lg:items-start gap-5 w-full'>
              <h1 className=' text-[32px] text-white/50 leading-7'>{data[crewIndex].role}</h1>
              <h1 className=' text-[56px] leading-[64px]'>{data[crewIndex].name}</h1>
              <p className=' lg:w-[380px] w-full  text-[15px] text-[#D0D6F9] lg:text-left text-center'>{data[crewIndex].bio}</p>
            </div>

            <div className=' flex w-full justify-center lg:justify-start gap-4'>
              <p onClick={() => setCrewIndex(0)} className={` w-4 h-4 rounded-full border border-transparent ${crewIndex === 0 ? " bg-white w-[18px] h-[18px]" : ""} hover:border-white bg-slate-500`}></p>
              <p onClick={() => setCrewIndex(1)} className={` w-4 h-4 rounded-full border border-transparent ${crewIndex === 1 ? " bg-white w-[18px] h-[18px]" : ""} hover:border-white bg-slate-500`}></p>
              <p onClick={() => setCrewIndex(2)} className={` w-4 h-4 rounded-full border border-transparent ${crewIndex === 2 ? " bg-white w-[18px] h-[18px]" : ""} hover:border-white bg-slate-500`}></p>
              <p onClick={() => setCrewIndex(3)} className={` w-4 h-4 rounded-full border border-transparent ${crewIndex === 3 ? " bg-white w-[18px] h-[18px]" : ""} hover:border-white bg-slate-500`}></p>
            </div>
          </div>
          <img className=' lg:h-[100%-1px] h-[480px] ' src={crewIndex === 0 ? (dogulas) : crewIndex === 1 ? (Mark) : crewIndex === 2 ? (Victor) : (Ansari)} alt='crew-Image' />

        </section>

      </section>
    </section>
  )
}
