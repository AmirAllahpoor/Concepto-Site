import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

export default function RecentEventCard
(
    {avatar , title , description , date} 
    : 
    {avatar : string ; title : string ; description : string ; date : string}
) {
  return (
    <div className="bg-white rounded-[24px] border-[1px] border-[#CBCED7] lg:w-[600px] w-[360px] lg:h-[208px] h-[140px] flex flex-row justify-between items-center">
        <div className="lg:w-[390px] w-[180px]">
            <Image alt="" src={`/${avatar}`} width={100} height={100} layout="responsive" loading="lazy"/>
        </div>
        <div className="flex flex-col h-full justify-between items-start lg:px-5 px-5 lg:py-7 py-5">
            <h1 className="lg:text-[20px] text-[14px] text-[#444859] font-bold ">{title}</h1>
            <h3 className="text-[14px] hidden lg:block text-[#737993] ">{description}</h3>
            <div className="flex flex-row w-full justify-between items-center px-2">
                <div className="flex flex-row justify-between items-center gap-2">
                    <IoLocationOutline className="text-[20px] text-[#9095AA]"/>
                    <span className="lg:text-[14px] text-[11px] text-[#9095AA]">تهران</span>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <MdOutlineDateRange className="text-[20px] text-[#9095AA]"/>
                    <span className="lg:text-[14px] text-[11px] text-[#9095AA]"> {date} </span>
                </div>
            </div>
        </div>
    </div>
  )
}
