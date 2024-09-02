'use client';
import Image from "next/image";
import LightMode from '../../public/images/icon-moon.svg'
import DarkMode from '../../public/images/icon-sun.svg'
import { useStore } from "@/context/appContext";

export default function Mode() {
    const {lightMode, setMode} = useStore()

  return (
    <div
    className="cursor-pointer"
     onClick={()=>setMode(!lightMode)}>
        <Image src={lightMode?LightMode:DarkMode} alt="mode" width={25} height={25} quality={100} className="object-cover"/>
    </div>
  )
}
