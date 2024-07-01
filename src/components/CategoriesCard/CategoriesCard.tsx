import Image from "next/image";

export default function CategoriesCard({text , image} : {text : string ; image : string}) {
  return (
    <div className="flex flex-col justify-between items-center h-20 gap-y-5 cursor-pointer">
        <div className="lg:w-[75px] w-[56px]">
          <Image alt="" className="outline outline-2 outline-offset-[3px] outline-[#0D6EFD] rounded-full" src={`/${image}.png`} width={100} height={100} layout="responsive" loading="lazy"/>
        </div>
        <h3 className="text-[#2A2A2A] lg:text-[14px] text-[12px]">{text}</h3>
    </div>
  )
}
