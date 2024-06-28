import HeroSection from "@/components/HeroSection/HeroSection";
import InstructionCard from "@/components/InstructionCard/InstructionCard";
import InvesmentCard from "@/components/InvesmentCard/InvesmentCard";

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
      </>
  );
}
  
