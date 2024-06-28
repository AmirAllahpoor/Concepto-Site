'use client'

import CountUp from "react-countup"

export default function InvesmentCard({title , count} : {title : string , count : string}) {

  return (
    <div className="flex flex-row-reverse justify-center lg:justify-between items-center">
        <div className="flex flex-row-reverse justify-between items-center lg:gap-5 gap-3 relative lg:left-11 left-6">
            <h3 className="text-[#0F0F0F] lg:text-[19px] text-[17px] font-bold"> {title} </h3>
            <h3 className="text-[#0F0F0F] lg:text-[40px] text-[25px]"> <CountUp end={Number(count)}/>+ </h3>
        </div>
        <div className="bg-[#FFECB3] rounded-full lg:w-[85px] w-[52px] lg:h-[85px] h-[52px] mb-2"></div>
    </div>
  )
}
