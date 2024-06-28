'use client'

import { IoIosFlash } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import HeroImage1 from "@/assets/HeroImage1.jpg"
import HeroImage2 from "@/assets/HeroImage2.jpg"
import HeroImage3 from "@/assets/HeroImage3.jpg"

export default function HeroSection() {
 
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-[#00183B] lg:text-[50px] text-[25px] text-center font-bold lg:mt-24 mt-14">با سرچ کمتر نتیجه بهتر بگیر</h1>
        <h5 className="lg:text-[20px] text-[14px] text-[#013075] mt-7">کانسپتو اولین مرجع معتبر استارتاپ ها و شرکت های ایرانی</h5>
        <div className="flex flex-row justify-center items-center mt-8 gap-5">
            <button type="button" className="text-[14px] text-white h-[40px] w-[160px] rounded-xl px-[16px] bg-[#0D6EFD] flex flex-row-reverse justify-evenly items-center"> <span>رایگان شروع کن!</span> <IoIosFlash className="text-[20px]"/> </button>
            <button type="button" className="text-[14px] text-[#2E303B] bg-white w-[150px] h-[40px] rounded-xl px-[16px] border-[1px] border-[#2E303B] flex flex-row justify-evenly items-center"> <span>درباره کانسپتو</span> <IoIosArrowBack className="text-[20px]"/> </button>
        </div>
            <div className="flex flex-row justify-center z-10 mt-5 lg:mt-0">
                <div className="md:relative w-[360px] lg:h-0 h-[340px] overflow-hidden lg:overflow-visible lg:top-[-4rem] lg:right-[17.5rem] z-10">
                    <Image src={HeroImage2} alt="" width={100} height={100} layout="responsive" loading="lazy"/>
                </div>
                <div className="relative w-[1000px] right-[4rem] mt-14 z-0 lg:block hidden">
                    <Image src={HeroImage1} alt="" width={100} height={100} layout="responsive" loading="lazy"/>
                </div>
                <div className="relative w-[500px] h-0 top-[28rem] left-[19rem] z-10 lg:block hidden">
                    <Image src={HeroImage3} alt="" width={100} height={100} layout="responsive" loading="lazy"/>
                </div>
            </div>
    </div>
  )

}
