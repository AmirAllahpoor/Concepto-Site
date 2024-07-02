import HeroSection from "@/components/HeroSection/HeroSection";
import InstructionCard from "@/components/InstructionCard/InstructionCard";
import InvesmentCard from "@/components/InvesmentCard/InvesmentCard";
import CategoriesCard from "@/components/CategoriesCard/CategoriesCard";

const CategoriesData : any = [
    {
        text : "هوش مصنوعی",
        image : "Categories7"
    },
    {
        text : "برنامه نویسی",
        image : "Categories6"
    },
    {
        text : "ارز دیجیتال",
        image : "Categories5"
    },
    {
        text : "حسابداری",
        image : "Categories4"
    },
    {
        text : "گرافیک",
        image : "Categories3"
    },
    {
        text : "رسانه ها",
        image : "Categories2"
    },
    {
        text : "هوافضا",
        image : "Categories1"
    },
    {
        text : "پزشکی",
        image : "Categories14"
    },
    {
        text : "موسیقی",
        image : "Categories11"
    },
    {
        text : "بیوتکنولوژی",
        image : "Categories10"
    },
    {
        text : "فیلم و سینما",
        image : "Categories9"
    },
    {
        text : "حمل و نقل",
        image : "Categories8"
    }
]

export default function Home() {
    
  return (
      <>
       <HeroSection />
          <div className="flex flex-wrap gap-x-24 gap-y-7 justify-center xl:px-[130px] lg:px-10 lg:mt-[15rem] mt-14  lg:pb-20 pb-10">
              <InvesmentCard title="شرکت فعال" count="112610"/>
              <InvesmentCard title="میلیارد تومان سرمایه گذاری" count="11"/>
              <InvesmentCard title="سرمایه گذار" count="496"/>
          </div>
       <div className="flex flex-wrap gap-x-10 gap-y-24 justify-center items-center xl:px-[130px] px-10 pb-20 mt-24">
            <InstructionCard SrcIMG="instruction1" Title="شرکت های مورد علاقت رو پیدا کن" Background="bg-[#AECFFE]"/>
            <InstructionCard SrcIMG="instruction2" Title="کسب و کارهای مناسب رو پیدا کن" Background="bg-[#79AEFE]"/>
            <InstructionCard SrcIMG="instruction1" Title="با کسب و کارها ارتباط بگیر" Background="bg-[#287EFD]"/>
       </div>
        <div className="flex flex-col justify-center items-center lg:mt-24 mt-5 lg:px-[140px] px-5 pb-14">
            <div className="flex flex-row justify-between w-full items-center gap-5 lg:px-16 px-6">
                <h2 className="lg:text-[24px] text-[16px] font-bold w-[11rem] text-[#737993]"> دسته بندی ها </h2>
                <hr className="border-t-[1px] w-full border-[#CBCED7]" />
            </div>
            <div className="flex flex-wrap justify-center items-center lg:gap-24 gap-14 py-16">
                {
                    CategoriesData &&
                        CategoriesData.map((Data : any) => {
                            return (
                                <CategoriesCard key={Data.text} text={Data.text} image={Data.image}/>
                            )
                        })
                }
            </div>
        </div>
      </>
  );
}
