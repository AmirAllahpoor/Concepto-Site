import Image from "next/image";

export default function InstructionCard({SrcIMG , Title , Background } : {SrcIMG : string ; Title : string ; Background : string}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
        <div className={`${Background} lg:w-[390px] w-[360px] lg:h-[130px] h-[110px] rounded-[32px] flex flex-col justify-center items-center`}>
          <div className="lg:w-[280px] w-[250px] relative lg:bottom-[38px] bottom-[35px]">
              <Image src={`/${SrcIMG}.png`} alt="" width={100} height={100} loading="lazy" layout="responsive"/>
          </div>
        </div>
        <h3 className="text-[20px] text-black font-bold">{Title}</h3>
    </div>
  )
}
