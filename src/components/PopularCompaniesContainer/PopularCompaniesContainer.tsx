'use client'

import { Swiper , SwiperSlide } from "swiper/react";
import PopularCompaniesCard from "../PopularCompaniesCard/PopularCompaniesCard";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import styles from "../../styles/PopularCompanies.module.css"

export default function PopularCompaniesContainer() {
  return (
    <div className="w-full lg:mt-[7rem] mt-0 lg:h-[40rem] h-[30rem]">
       <Image alt="" src="/BgPopularCompanies.png" className="lg:block hidden" width={100} height={100} layout="responsive"/>
       <Image alt="" src="/BgPopularCompaniesMobile.png" className="block lg:hidden" width={100} height={100} layout="responsive"/>
       <div className="relative lg:top-[-23rem] top-[-11rem] w-full lg:pr-10 pr-4">
            <div className="flex flex-row justify-between w-full items-center gap-5 lg:pr-16 lg:pl-20 pl-0 px-6 ">
                <h2 className="lg:text-[24px] text-[16px] font-bold text-white "> شرکت های محبوب </h2>
                <button className="flex flex-row-reverse justify-between items-center text-white w-[8rem]" type="button"> <IoIosArrowBack className="text-white text-[24px]"/> <span className="text-[18px] lg:block hidden">مشاهده همه</span> </button>
            </div>
            <Swiper slidesPerView={'auto'} spaceBetween={30} className="MySwiper mt-12">
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies1.png" avatar="snapp.jpg" title="شرکت اسنپ" description="از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی ، خرید بلیط سفر، مشاوره پزشکی و روا..." star="5" ContactCount="21,394" invesmentCount="398"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies2.png" avatar="digikala.jpg" title="شرکت دیجی کالا" description="هر انچه که نیاز دارید با بهترین قیمت از دیجی کالا بخرید ! جدیدترین انواع گوشی موبایل ، لپ تاپ ، لباس و ..." star="4" ContactCount="25,120" invesmentCount="432"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies3.png" avatar="farabi.jpg" title="کارگزاری فارابی" description="کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه میکند؛ همه این خدمات در ..." star="5" ContactCount="29,120" invesmentCount="392"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies4.png" avatar="alibaba.jpg" title="شرکت علی بابا" description="علی بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه ای که به واسطه پشتیبانی ..." star="5" ContactCount="26,750" invesmentCount="234"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies1.png" avatar="snapp.jpg" title="شرکت اسنپ" description="از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی ، خرید بلیط سفر، مشاوره پزشکی و روا..." star="5" ContactCount="21,394" invesmentCount="398"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies2.png" avatar="digikala.jpg" title="شرکت دیجی کالا" description="هر انچه که نیاز دارید با بهترین قیمت از دیجی کالا بخرید ! جدیدترین انواع گوشی موبایل ، لپ تاپ ، لباس و ..." star="4" ContactCount="25,120" invesmentCount="432"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies3.png" avatar="farabi.jpg" title="کارگزاری فارابی" description="کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه میکند؛ همه این خدمات در ..." star="5" ContactCount="29,120" invesmentCount="392"/> </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlider}> <PopularCompaniesCard cover="ImagePopularCompanies4.png" avatar="alibaba.jpg" title="شرکت علی بابا" description="علی بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه ای که به واسطه پشتیبانی ..." star="5" ContactCount="26,750" invesmentCount="234"/> </SwiperSlide>
            </Swiper>
       </div>
    </div>
  )
}
