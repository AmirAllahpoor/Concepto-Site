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
    <div className="2xl:flex flex-col justify-center items-center w-full h-[30rem] hidden">
        <div className="flex flex-col justify-center ">
            <div className="flex flex-col justify-between items-center z-30 relative top-[29rem] px-20">
                <div className="flex flex-row-reverse w-full justify-between items-center ">
                    <div className="flex flex-col justify-between items-start gap-y-5">
                        <h1 className="text-white text-[16px] font-bold">از جدیدترین اخبار مطلع شوید:</h1>
                        <div className="flex flex-row justify-center items-center">
                            <input type="text" className="bg-[#eeeef1] p-6 outline-none rounded-[50px] h-[54px] w-[438px]" placeholder="ایمیل خود را وارد کنید"/>
                            <button type="button" className="relative right-[-7.2rem] flex flex-row justify-between items-center bg-[#0D6EFD] px-3 rounded-[500px] h-[40px] w-[107px]"> <span className="text-[16px] text-white">عضویت</span> <MdDone className="text-[24px] text-white"/> </button>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-y-4">
                            <div className="flex flex-row justify-start items-start gap-x-2">
                                <IoLocationOutline className="text-[24px] text-white"/>
                                <h2 className="text-white text-[16px] font-bold"> ادرس: <span className="text-[14px] text-white font-normal"> تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو </span> </h2>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-x-2">  
                                <FaPhone className="text-[20px] text-white"/>
                                <h2 className="text-white text-[16px] font-bold">شماره تماس: <span className="text-[14px] text-white font-normal"> 09123456789 </span> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-32">
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="text-[16px] font-bold text-white">کانسپتو</h1>
                            <h1 className="text-[14px] text-white">درباره ما </h1>
                            <h1 className="text-[14px] text-white">تماس با ما</h1>
                            <h1 className="text-[14px] text-white">اتاق خبر</h1>
                            <h1 className="text-[14px] text-white">قوانین و مقررات</h1>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="text-[16px] font-bold text-white">خدمات مشتریان</h1>
                            <h1 className="text-[14px] text-white">حساب کاربری</h1>
                            <h1 className="text-[14px] text-white">سوالات متداول</h1>
                            <h1 className="text-[14px] text-white">راهنمای کار با سایت</h1>
                            <h1 className="text-[14px] text-white">گزارش باگ</h1>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-y-5">
                            <h1 className="text-[16px] font-bold text-white">پیشنهاد کانسپتو</h1>
                            <h1 className="text-[14px] text-white">لیست استارتاپ های ایرانی</h1>
                            <h1 className="text-[14px] text-white">ارزش گزاری استارتاپ</h1>
                            <h1 className="text-[14px] text-white">ایده های استارتاپی</h1>
                            <h1 className="text-[14px] text-white">محبوب ترین شرکت ها</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse justify-between items-center w-full mt-10 pl-[310px]">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-[16px] text-white font-bold">ما را در شبکه های اجتماعی دنبال کنید:</h1>
                        <div className="flex flex-row justify-between gap-x-7 items-center mt-5">
                            <FaTwitter className="text-[28px] text-white cursor-pointer"/>
                            <FaInstagram className="text-[28px] text-white cursor-pointer"/>
                            <FaLinkedinIn className="text-[28px] text-white cursor-pointer"/>
                            <FaFacebookF className="text-[28px] text-white cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <div className="w-[132px]">
                            <Image alt="" src="/logofooter.jpg" layout="responsive" width={100} height={100} />
                        </div>
                        <h3 className="text-[16px] text-white mt-5 leading-8 pl-10">استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا پروژه‌های پیشرفته، جهان  استارت‌آپ‌ها را از  اینجا کشف کنید.</h3>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Image alt="" src="/bgfooter.jpg" width={100} height={100} layout="responsive"/>
            </div>
        </div>
        <div className="bg-[#00183B] py-6 px-2 h-[65px] text-center w-full">
            <h1 className="text-white text-[16px]"> © ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است. </h1>
        </div>
    </div>
  )
}
