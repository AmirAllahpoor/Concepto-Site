import Link from "next/link";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { IoIosFlash } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


export default function Header() {
  return (
    <div className="bg-white h-full w-screen xl:px-32 pr-1 pl-5 lg:px-10 flex flex-col justify-between pb-5 pt-6 items-start border-b-[1px] lg:border-none">
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center w-full">
              <button type="button" className="flex flex-row justify-center items-center lg:hidden w-[40px] h-[40px] rounded-lg bg-[#E9EAEE] p-1 items mr-5"> <MdOutlineMenu className="text-[25px]"/> </button>
              <div className="md:w-[170px] w-[150px] mr-5 lg:mr-0">
                <Image src="/logo.png" width={100} height={100} alt="" layout="responsive" loading="lazy"/>
              </div>
              <div className="mr-2 w-[25rem] hidden lg:flex flex-row-reverse items-center">
                <input type="text" placeholder="جستجو کسب و کار" className="text-[14px] bg-[#E9EAEE] rounded-[10px] p-[12px] pr-[40px] h-[40px] w-full outline-none text-[#737993]"/>
                <IoMdSearch className="relative right-[2rem] text-[20px] text-[#737993]"/>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-4">
              <button type="button" className="text-[14px] text-white h-[40px] lg:w-[160px] w-[40px] rounded-xl lg:px-[16px] px-1 bg-[#0D6EFD] flex flex-row-reverse justify-evenly items-center"> <span className="hidden lg:block">رایگان شروع کن!</span> <IoIosFlash className="text-[20px]"/> </button>
              <button type="button" className="text-[14px] text-[#2E303B] bg-white lg:w-[150px] w-[40px] h-[40px] rounded-xl lg:px-[16px] px-1 border-[1px] border-[#2E303B] flex flex-row-reverse justify-evenly items-center"> <span className="hidden lg:block">ورود/ثبت نام</span> <MdLogin className="text-[20px]"/> </button>
            </div>
        </div>
        <div className="hidden lg:flex flex-row justify-start items-center gap-8 pt-5 text-[13px] text-black">
          <Link href="/PDP">شرکت ها</Link>
          <Link href="/CareerOpportunities">فرصت های شغلی</Link>
          <Link href="/News&Event">اخبار و رویدادها</Link>
          <Link href="/AboutUs">درباره ما</Link>
          <Link href="/ContactUs">تماس با ما</Link>
        </div>
        <div className=" w-full lg:hidden flex flex-row-reverse items-center mt-5">
                <input type="text" placeholder="جستجو کسب و کار" className="text-[14px] bg-[#E9EAEE] rounded-[10px] p-[12px] pr-[40px] h-[40px] w-full outline-none text-[#737993]"/>
                <IoMdSearch className="relative right-[2rem] text-[20px] text-[#737993]"/>
        </div>
    </div>
  )
}
