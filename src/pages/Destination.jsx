import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Moon from "../assets/destination/image-moon.png"
import Mars from "../assets/destination/image-mars.png"
import Europa from "../assets/destination/image-europa.png"
import Titan from "../assets/destination/image-titan.png"
import { Link } from 'react-router-dom'
import { Space } from '../../data'


export const Destination = () => {
  const [destinationIndex, setDestinationIndex] = useState(0)


  const data = Space.destinations;
  return (
    <section className='desktopBackgroundDestination flex flex-col items-center w-full h-screen fixed'>
      <Navbar />
      <section className='lg:max-w-[1280px] z-10 w-full min-h-[calc(100vh-150px)] h-full'>
        <h1 className='w-fit my-6 md:my-10 lg:my-0 lg:mt-16 font-Barlow text-base md:text-xl lg:text-2xl mx-auto md:mx-0 md:ml-10 lg:ml-0 text-[28px] tracking-[4.725px] leading-[34px] text-white'><span className='text-white/40 mr-3 font-extrabold'>01</span> PICK YOUR DESTINATION</h1>
        <section className=' grid lg:grid-cols-2 grid-row-2 place-content-center place-items-center'>
          <img className=' w-[300px] h-[300px] mt-8  lg:w-[445px] lg:h-[445px] lg:mt-16' src={destinationIndex === 0 ? (Moon) : destinationIndex === 1 ? (Mars) : destinationIndex === 2 ? (Europa) : (Titan)} />

          <div className=' lg:order-2 flex flex-col justify-center items-center lg:items-start w-[445px] gap-9'>
            <nav className=' flex mt-12 gap-9 items-start text-white'>
              <Link onClick={() => setDestinationIndex(0)} className={` ${destinationIndex === 0 ? " text-white border-white" : " hover:border-white/25"} border-b-2 border-transparent text-base tracking-[2.7px] font-Barlow font-thin`} >Moon</Link>
              <Link onClick={() => setDestinationIndex(1)} className={` ${destinationIndex === 1 ? " text-white border-white" : " hover:border-white/25"} border-b-2 border-transparent text-base tracking-[2.7px] font-Barlow  font-thin`} >Mars</Link>
              <Link onClick={() => setDestinationIndex(2)} className={` ${destinationIndex === 2 ? " text-white border-white" : " hover:border-white/25"} border-b-2 border-transparent text-base tracking-[2.7px] font-Barlow  font-thin`} >Europa</Link>
              <Link onClick={() => setDestinationIndex(3)} className={` ${destinationIndex === 3 ? " text-white border-white" : " hover:border-white/25"} border-b-2 border-transparent text-base tracking-[2.7px] font-Barlow  font-thin`} >Titan</Link>
            </nav>
            <div className='flex flex-col gap-9'>
              <div className=' flex flex-col items-center lg:items-start'>
                <h1 className=' text-[100px] text-white'>{data[destinationIndex].name}</h1>
                <p className=' text-lg text-white lg:text-justify text-center'>{data[destinationIndex].description}</p>

              </div>
              <div className=' h-[1px] w-full bg-slate-500 '></div>
              <div className=' flex w-full '>
                <div className=' flex flex-col items-center lg:items-start w-1/2'>
                  <p className=' text-sm tracking-[2.35px] text-white'>AVG. DISTANCE</p>
                  <p className=' text-[28px] text-white'>{data[destinationIndex].distance}</p>
                </div>

                <div className='flex flex-col items-center lg:items-start w-1/2'>
                  <p className=' text-sm tracking-[2.35px] text-white'>EST. TRAVEL TIME</p>
                  <p className=' text-[28px] text-white'>{data[destinationIndex].travel}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </section>

    </section>
  )
}
