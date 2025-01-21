import React from 'react'
import campaign from "../assets/campaign.png"
import postcard from "../assets/postcard.png"
import thanks from "../assets/thanks.png"



const Trend = () => {

    return (

        <section className='bg-[#E0F8F2] py-8'>
            <div className='container mx-auto'>
                <p className='text-center text-[25px] leading-none md:text-[50px] md:mb-2 md:text-center  md:leading-1'>Latest trends & <span className='text-[#009387] font-Grace text-[25px] leading-none  md:text-[50px] md:leading-1 '>insights</span>  </p>



                <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-3 md:px-6 md:py-6 md:mb-6">
                    <div className='flex flex-col items-start '>
                        <div>
                            
                        <img src={campaign} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-start p-2 '>3 Low-Cost Campaigns You Must Run to Win BFCM</p>
                    </div>

                    <div className='flex flex-col items-start '>
                        <div>
                            
                        <img src={postcard} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-start p-2'>3 Low-Cost Campaigns You Must Run to Win BFCM</p>
                    </div>

                    <div className='flex flex-col items-start '>
                        <div>
                            
                        <img src={thanks} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-start p-2'>3 Low-Cost Campaigns You Must Run to Win BFCM</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Trend
