import HeroSection from "@/components/HeroSection/HeroSection";
import InvesmentCard from "@/components/InvesmentCard/InvesmentCard";

export default function Home() {

  return (
      <>
       <HeroSection />
       <div className="flex flex-row justify-center pr-10 lg:pr-0 lg:justify-between lg:flex-col">
          <div className="flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-center xl:px-[130px] lg:px-10 lg:mt-[15rem] mt-14  lg:pb-20 pb-10">
              <InvesmentCard title="شرکت فعال" count="112610"/>
              <InvesmentCard title="میلیارد تومان سرمایه گذاری" count="11"/>
              <InvesmentCard title="سرمایه گذار" count="496"/>
          </div>
       </div>
       
      </>
  );
}
  
