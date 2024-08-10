import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
        {/* Footer 1 */}
    <div className="flex flex-col justify-center w-full lg:h-[30rem] h-[50rem] lg:bg-[url('/bgfooter.jpg')] bg-[url('/bgfootermobile.jpg')] bg-cover lg:px-20 px-10 pt-10">
                {/* First Row */}
                <div className="flex lg:flex-row-reverse flex-col-reverse w-full justify-between items-center ">
                    {/* Contact */}
                    <div className="flex flex-col justify-between lg:items-start items-center  gap-y-5 w-auto lg:mt-0 mt-14">
                        {/* title */}
                        <h1 className="text-white xL:text-[16px] text-[14px] font-bold">از جدیدترین اخبار مطلع شوید:</h1>
                            {/* input news */}
                        <div className="flex flex-row justify-between items-center bg-[#eeeef1] py-6 pl-2 pr-5 outline-none rounded-[50px] xl:h-[54px] h-[44px] xl:w-[438px] w-[300px]">
                            <input type="text" className="bg-transparent outline-none text-[#343434] xl:text-[16px] text-[14px]" placeholder="ایمیل خود را وارد کنید"/>
                            <button type="button" className=" flex flex-row justify-between items-center bg-[#0D6EFD] px-3 rounded-[500px] h-[40px] "> <span className="text-[16px] text-white xl:block hidden">عضویت</span> <MdDone className="text-[24px] text-white"/> </button>
                        </div>
                        <div className="flex flex-col justify-center lg:items-start items-center gap-y-4">
                            {/* Address */}
                            <div className="flex flex-row justify-start items-start gap-x-2">
                                <IoLocationOutline className="xl:text-[24px] text-[22px] text-white"/>
                                <h2 className="text-white xl:text-[16px] text-[14px] font-bold"> ادرس: <span className="text-[14px] text-white font-normal"> تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو </span> </h2>
                            </div>
                            {/* Phone */}
                            <div className="flex flex-row justify-start items-start gap-x-2">  
                                <FaPhone className="xl:text-[20px] text-[18px] text-white"/>
                                <h2 className="text-white xl:text-[16px] text-[14px] font-bold">شماره تماس: <span className="text-[14px] text-white font-normal"> 09123456789 </span> </h2>
                            </div>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="flex flex-row lg:justify-center justify-between lg:w-auto w-full items-center xl:gap-x-32 lg:gap-x-20">
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="xl:text-[16px] text-[14px] font-bold text-white">کانسپتو</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">درباره ما </h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">تماس با ما</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">اتاق خبر</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">قوانین و مقررات</h1>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="xl:text-[16px] text-[14px] font-bold text-white">خدمات مشتریان</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">حساب کاربری</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">سوالات متداول</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">راهنمای کار با سایت</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">گزارش باگ</h1>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="xl:text-[16px] text-[14px] font-bold text-white">پیشنهاد کانسپتو</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">لیست استارتاپ های ایرانی</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">ارزش گزاری استارتاپ</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">ایده های استارتاپی</h1>
                            <h1 className="xl:text-[14px] text-[12px] text-white">محبوب ترین شرکت ها</h1>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center w-full mt-10 ">
                    {/* Social Media */}
                    <div className="flex flex-col justify-start lg:items-start items-center lg:mt-0 mt-14">
                        <h1 className="xl:text-[16px] text-[14px] text-white font-bold">ما را در شبکه های اجتماعی دنبال کنید ، لینک های ارتباطی با کانسپتو :</h1>
                        <div className="flex flex-row justify-between gap-x-7 items-center mt-5">
                            <FaTwitter className="xl:text-[28px] text-[24px] text-white cursor-pointer"/>
                            <FaInstagram className="xl:text-[28px] text-[24px] text-white cursor-pointer"/>
                            <FaLinkedinIn className="xl:text-[28px] text-[24px] text-white cursor-pointer"/>
                            <FaFacebookF className="xl:text-[28px] text-[24px] text-white cursor-pointer"/>
                        </div>
                    </div>
                    {/* Concepto description */}
                    <div className="flex flex-col justify-center lg:items-start items-center text-center lg:text-start mt-5 lg:mt-0">
                        <div className="xl:w-[132px] w-[120px]">
                            <Image alt="" src="/logofooter.jpg" layout="responsive" width={100} height={100} />
                        </div>
                        <h3 className="xl:text-[16px] text-[14px] text-white mt-5 leading-8 xl:w-[600px] w-[450px] lg:px-0 px-10">استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا پروژه‌های پیشرفته، جهان  استارت‌آپ‌ها را از  اینجا کشف کنید.</h3>
                    </div>
                </div>
            </div>
    {/* footer 2 */}
        <div className="bg-[#00183B] py-6 px-2 h-[65px] text-center w-full">
            <h1 className="text-white xl:text-[16px] text-[14px]"> © ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است. </h1>
        </div>
    </div>
  )
}
