import React from 'react'
import riskfree from "../assets/riskfree.png"
import start from "../assets/start.png"


const RIskfree = () => {
    return (
        <section className='bg-[#FF6D2C]'>
            <div className='container mx-auto'>

                <div className='flex flex-col items-center gap-4 px-6 md:justify-between md:items-center md:flex-row '>
                    <div className='pl-10 text-white md:pl-0' >
                        <p className='text-[50px] leading-none py-6'>Try PostPilot Risk-Free</p>
                        <p className='text-[10px] py-2'>No contracts. No commitments. Guaranteed results.*</p>
                        
                        <div className='flex items-center justify-start gap-x-5'>
                            <div className='py-1'>
                                <button className='h-6 px-3 py-4 bg-[#FFFFFF] border border-b-4 border-r-2 border-black rounded-lg font-Inter text-[9px] flex items-center justify-center text-black'>
                                    GET STARTED

                                </button>



                            </div>
                            <div className='flex flex-col items-start justify-center py-4 -gap-y-1'>
                                <div className='flex'>
                                    <img className="w-3 h-3" src={start} alt="Star" />
                                    <img className="w-3 h-3" src={start} alt="Star" />
                                    <img className="w-3 h-3" src={start} alt="Star" />
                                    <img className="w-3 h-3" src={start} alt="Star" />
                                    <img className="w-3 h-3" src={start} alt="Star" />
                                </div>
                                <p className='text-[8px] text-center'>5.0 Shopify Rating</p>
                            </div>

                        </div>
                        <p className='text-[8px] py-1'>* for qualified brands with over $1m annual Shopify revenue.</p>

                    </div>
                    <div className="">
                        <img src={riskfree} alt="" />
                    </div>

                </div>




            </div>

        </section>
    )
}

export default RIskfree
