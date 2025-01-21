import React from 'react'
import postcampaign from "../assets/postcampaign.png"

const Postcard = () => {
    return (
        <section className='bg-[#EEECFF]'>
            <div className='container mx-auto'>


                <div className='flex flex-col items-center md:flex-row-reverse md:justify-center md:items-center md:gap-4'>

                    
                    <div>
                        <p className='text-center text-[25px] leading-none md:text-[50px] md:mb-2 md:text-start  md:leading-1'>How <span className='text-[#009387] font-Grace text-[25px] leading-none  md:text-[50px] md:leading-1 '>Obvi</span> Drives Profits with Hands-Off Postcard Campaigns</p>
                        <p className='text-10px] py-3'>The 🚀 supplements brand wanted to offset high ad costs and reach dormant customers. They scored 1000%+ ROIs.</p>


                        
                        <div className='flex items-center justify-start gap-x-4'>
                            <div className='flex flex-col justify-start'>
                                <p className='text-[20px] font-bold leading-none'>1468%</p>
                                <p className='text-[10px]'>ROI</p>
                            </div>

                            <div className='flex flex-col justify-start'>
                                <p className='text-[20px] font-bold leading-none'>1468%</p>
                                <p className='text-[10px]'>ROI</p>
                            </div>

                            <div className='flex flex-col justify-start'>
                                <p className='text-[20px] font-bold leading-none'>1468%</p>
                                <p className='text-[10px]'>ROI</p>
                            </div>
                        </div>

                        
                        <div>
                        <button className='h-6 px-3 py-4 bg-[#FFFFFF] border border-b-4 border-r-2 border-black rounded-lg font-Inter text-[9px] flex items-center justify-center text-black'>
                                   READ CASE STUDY

                                </button>
                        </div>
                        
                        <div>
                            <p><img src="" alt="" /></p>
                            
                        </div>


                        
                    </div>

                    
                    <div>
                        <img src={postcampaign} alt="" />

                    </div>


                </div>


            </div>

        </section>
    )
}

export default Postcard
