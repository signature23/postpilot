import React from 'react'
import TryButton from './recomponents/TryButton'
import start from "../assets/start.png"
import herobg from "../assets/herobg.png"
import herobg1 from "../assets/herobg1.png"

const Herosection = () => {
    return (
        <section className='bg-[#E0F8F2] w-screen pt-10 pb-12 '>

            <div className='container flex flex-col justify-between mx-auto itms-center md:flex-row'>
                <div className='w-1/2 pl-10 leading-none'>
                    <div>
                        <p className='text-[69px]'>
                            Meet your
                            <span className='text-[#009387] font-Grace'> favorite</span> new (old) marketing channel.
                        </p>
                        <p className='text-[8px] my-4'>Remarkable results. Easier than email. Postcard marketing reinvented for modern ecommerce.</p>
                    </div>

                    <div className='flex items-center justify-start gap-x-5'>
                        <TryButton />
                        <div className='flex flex-col items-center justify-center -gap-y-1'>
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

                </div>
                <div className='w-1/3'>
                    <div className='relative h-80 w-96'>
                        <img src={herobg1} alt="" />
                        <div className='absolute top-0 left-0'>
                            <img src={herobg} alt="" />

                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default Herosection
