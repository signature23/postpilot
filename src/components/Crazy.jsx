import React from 'react'
import directmail from "../assets/directmail.png"

const Crazy = () => {
    return (
        <section className='bg-[#F3FAFA] py-6'>
            <div className='container mx-auto'>
                <p className=' text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-60 md:leading-1'>Why use direct mail?
                    It <span className='text-[#009387] font-Grace'>works</span> like crazy.</p>

                <div className='flex flex-col gap-y-4 md:flex md:flex-row md:justify-between md:items-center '>
                    <div className='flex flex-col items-center justify-center md:w-1/3'>
                        <p className='text[25px] md:text-[50px]'>28X</p>
                        <p className='text-[9px] md:text-[20px] md:text-center'>Higher response rate than email & digital</p>
                    </div>
                    
                    
                    <div className='flex flex-col items-center justify-center md:w-1/3'>
                        <img src={directmail} alt="directmail" />
                        <p className='text-[9px] md:text-[20px] md:text-center'>Your messages get read</p>
                    </div>

                    
                    <div className='flex flex-col items-center justify-center md:w-1/3'>
                        <p className='text[25px] md:text-[50px]'>17Days</p>
                        <p className='text-[9px] md:text-[20px] md:text-center'>Lifespan of a postcard vs. seconds for email or SMS</p>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Crazy
