import React from 'react'
import shopify from "../assets/shopify.png"
import cart from "../assets/cart.png"
import analitics from "../assets/analitics.png"
import blog from "../assets/blog.png"
import stamp from "../assets/stamp.png"
import service from "../assets/service.png"

const Brand = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='container px-4 py-6 mx-auto mt-6 md:px-6'>


                <div className='md:py-10'>
                    <p className='text-center text-[25px] leading-none md:text-[50px] md:mb-2 md:text-center  md:leading-1'>
                        Everything your brand needs to
                    </p>
                    <p className='text-[#009387] font-Grace text-center text-[25px] leading-none  md:text-[50px] md:text-center md:px-44 md:leading-1 '>
                        make your brand unforgettable

                    </p>

                </div>


                <div className='flex flex-col items-center mt-5 md:grid-cols-3 md:gap-6 md:grid gap-y-5'>
                    <div className='bg-[#FDF3EA] border rounded-md flex flex-col justify-center items-center py-8 px-12 size-72'>
                        <div >
                            <img src={shopify} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>

                    <div className='bg-[#E0F8F2] border rounded-md flex flex-col justify-center items-center py-8 px-12 size-72 '>
                        <div>
                            <img src={cart} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>

                    <div className='bg-[#EEECFF] border rounded-md flex flex-col justify-center items-center py-8 px-12  size-72'>
                        <div>
                            <img src={analitics} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>

                    <div className='bg-[#D9F2F7] border rounded-md flex flex-col justify-center items-center py-8 px-12 size-72'>
                        <div>
                            <img src={blog} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>

                    <div className='bg-[#FAEDED] border rounded-md flex flex-col justify-center items-center py-8 px-12 size-72'>
                        <div>
                            <img src={stamp} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>

                    <div className='bg-[#F1F1F1] border rounded-md flex flex-col justify-center items-center py-8 px-12 size-72'>
                        <div>
                            <img src={service} alt="" />
                        </div>
                        <p className='text-[15px] font-bold text-center my-2 mx-6'>Plug-and-play with your stack</p>
                        <p className='text-[10px] text-center'>Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.</p>

                    </div>




                </div>



            </div>


        </div>
    )
}

export default Brand
