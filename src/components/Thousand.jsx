import React from 'react'
import run from "../assets/run.png"
import gum from "../assets/gum.png"
import bread from "../assets/bread.png"
import breadlogo from "../assets/bredlogo.png"
import promix from "../assets/promix.png"
import promixlog from "../assets/promixlog.png"
import scotch from "../assets/scotch.png"
import scotchlogo from "../assets/scotchlogo.png"


const Thousand = () => {
  return (
    <section className='bg-[#FFFFFF] py-8'>
        <div className='container mx-auto'>
            <p className=' text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-60 md:leading-1'>Trusted by thousands 
            of top DTC <span className='text-[#009387] font-Grace'> brands.</span></p>

            <div>
              <div className='flex flex-col items-center justify-center md:flex-row md:gap-x-8 gap-y-4'>
                <div  className='flex flex-col items-center gap-y-3'>
                  <img src={run} alt="run" />
                  <img src={gum} alt="" />
                </div>

                <div  className='flex flex-col items-center gap-y-3'>
                  <img src={bread} alt="run" />
                  <img src={breadlogo} alt="" />
                </div>

                <div  className='flex flex-col items-center gap-y-3'>
                  <img src={promix} alt="run" />
                  <img src={promixlog} alt="" />
                </div>

                <div  className='flex flex-col items-center gap-y-3'>
                  <img src={scotch} alt="run" />
                  <img src={scotchlogo} alt="" />
                </div>
              </div>
            </div>

        </div>

      
    </section>
  )
}

export default Thousand
