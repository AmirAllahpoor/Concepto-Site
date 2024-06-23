'use client'

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {

  const el = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current , {
      strings : ["با سرچ کمتر نتیجه بهتر بگیرید"],
      showCursor : false,
      typeSpeed : 70,
      backSpeed : 70,
      backDelay : 1000,
      loop : true,
      loopCount : Infinity,
    })
    return () => {
      typed.destroy()
    }
  })

  return (
      <>
      <h1 ref={el} className="text-[#00183B] text-[50px] text-center font-bold mt-32"></h1>
      </>
  );
}

