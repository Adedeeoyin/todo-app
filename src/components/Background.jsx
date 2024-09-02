'use client'
import Image from "next/image";
import LightBg from '../../public/images/bg-desktop-light.jpg'
import DarkBg from '../../public/images/bg-desktop-dark.jpg'
import { useStore } from "@/context/appContext";

export default function Background() {
    const {lightMode} = useStore()
  return (
    <div className="absolute top-0 left-0 w-full h-full">
        <Image src={lightMode?LightBg:DarkBg} alt="background-image" fill className="object-cover"/>
        <div className={`absolute w-full h-2/3 bottom-0 ${lightMode?'bg-white': 'bg-darkTheme'} left-0`}>&nbsp;</div>
    </div>
  )
}
