import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

export default function PopularCompaniesCard
(
    {cover, avatar , title , ContactCount , invesmentCount , description , star}
     : 
    {cover : string ; avatar : string ; title : string ; ContactCount : string ; invesmentCount : string ; description : string ; star : string}
) {
  return (
    <div className="flex flex-col justify-between items-center w-[288px] h-[410px] bg-white rounded-[27px] pb-4 border border-[#cecece] cursor-pointer">
        <div className="flex flex-col justify-between items-center">
            <Image alt="" src={`/${cover}`} layout="responsive" width={100} height={100}/>
            <div className="flex flex-row justify-start items-center gap-4 w-full px-5">
                <div className="w-[75px] relative top-[-1rem]">
                    <Image alt="" src={`/${avatar}`} className="rounded-[12px] outline outline-[3px]" layout="responsive" width={100} height={100}/>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <h4 className="text-[14px] text-[#444859] font-bold">{title}</h4>
                    <h4 className="text-[12px] text-[#737993]">تجارت الکترونیک</h4>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-col justify-between items-start w-[124px] h-[67px] rounded-[8px] p-2 border-[1px] border-[#E9EAEE] "> <span className="text-[12px] text-[#444859]">مخاطبین جدید</span> <span className="text-[14px] font-bold text-[#0D6EFD]">{ContactCount}</span> </div>
                <div className="flex flex-col justify-between items-start w-[124px] h-[67px] rounded-[8px] p-2 border-[1px] border-[#E9EAEE] "> <span className="text-[12px] text-[#444859]">سرمایه گذاران جدید</span> <span className="text-[14px] font-bold text-[#0D6EFD]">{invesmentCount}</span> </div>
            </div>
            <div className="flex flex-col justify-between items-center mt-5">
                <h4 className="text-[12px] text-[#5B6176] px-4">{description}</h4>
                <div className="flex flex-row justify-between items-center mt-4 w-full px-5">
                    <div className="flex flex-row justify-center items-center gap-2">
                        <IoLocationOutline className="text-[20px] text-[#9095AA]"/>
                        <span className="text-[14px] text-[#9095AA]">تهران، ایران</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-1">
                        <IoStarSharp className="text-[14px] text-[#FFC51A]"/>
                        <span className="text-[15px] text-[#737993] mt-1">{star}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
