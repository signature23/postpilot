import React from 'react'
import ovi from "../assets/ovbi.png"
import quote from "../assets/quto.png"
import fight from "../assets/fight.png"
import paragon from "../assets/paragon.png"


const PostMake = () => {
    return (
        <section className='bg-[#FDF3EA]'>
            <div className='container py-6 mx-auto'>

                <p className='text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-44 md:leading-1'>PostPilot makes it a <span className='text-[#009387] font-Grace'>cinch</span> to send personalized, profit-generating postcards.</p>



                <div>


                    <div>
                        <p className='text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-44 md:leading-1' ><span className='text-[#009387] font-Grace'>Powerful</span> acquisition & retention</p>
                        <p className='text-[#58595D] my-4'>Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.</p>

                        <div className='relative p-6 border-2 border-gray-300 rounded-sm'>
                            <p className='text-[#58595D] italic text-start my-4'>It’s like Klaviyo for direct mail. The results are absolutely insane.</p>
                            <div className='flex justify-between'>
                                <p className='text-[#A89B90] '>Ash Melwani, CMO</p>
                                <img src={ovi} alt="ovi" />
                            </div>
                            <img className="absolute -top-4 left-6" src={quote} alt="" />
                        </div>
                    </div>

                    

                    <div>
                        <p className='text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-44 md:leading-1' ><span className='text-[#009387] font-Grace'>Fight back</span>  against iOS updates, jacked-up CPCs & spam folders</p>
                        <p className='text-[#58595D] my-4'>Deliver your message to all of your customers — for less than the cost of a click.</p>

                        <div className='relative p-6 border-2 border-gray-300 rounded-sm'>
                            <p className='text-[#58595D] italic text-start my-4'>PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.</p>
                            <div className='flex justify-between'>
                                <p className='text-[#A89B90] '>Leah Keith, GM</p>
                                <img src={fight} alt="ovi" />
                            </div>
                            <img className="absolute -top-4 left-6" src={quote} alt="" />
                        </div>

                    </div>

                    <div>
                        <p className='text-center text-[25px] leading-none py-10 md:text-[50px] md:text-center md:px-44 md:leading-1' > Done for <span className='text-[#009387] font-Grace'>you</span></p>
                        <p className='text-[#58595D] my-4'>Deliver your message to all of your customers — for less than the cost of a click.</p>

                        <div className='relative p-6 border-2 border-gray-300 rounded-sm'>
                            <p className='text-[#58595D] italic text-start my-4'>The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.</p>
                            <div className='flex justify-between'>
                                <p className='text-[#A89B90] '>Holly Davies, Marketing Director</p>
                                <img src={paragon} alt="ovi" />
                            </div>
                            <img className="absolute -top-4 left-6" src={quote} alt="" />
                        </div>

                    </div>


                    

                </div>



            </div>

        </section>
    )
}

export default PostMake
