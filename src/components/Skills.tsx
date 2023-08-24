import htmlIcon from "@/assets/html.svg"
import cssIcon from "@/assets/css.svg"
import jsIcon from "@/assets/javascript.svg"
import gitIcon from "@/assets/github.svg"
import reactIcon from "@/assets/react.svg"
import nextIcon from "@/assets/next-js.svg"
import tsIcon from "@/assets/typescript.svg"
import tailWindIcon from '@/assets/tailwindcss.svg'
import windowsIcon from "@/assets/windows.svg"
import linuxIcon from "@/assets/linux.svg"

import Image from "next/image";

export function Skills ()  {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold mb-4">Hard Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          <div className=" hover:animate-pulse bg-white flex flex-col gap-4 items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Html 5 Logo" className="bg-white" src={htmlIcon} width={60} height={60}></Image>
          </div>
          <div className=" bg-white hover:animate-pulse flex items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="CSS3 Icon" className="bg-white" src={cssIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-white items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="gitHub Logo" className="bg-white" src={gitIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-white items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="JavaScript Language Logo" className="bg-white" src={jsIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-white items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="React Js  Logo" className="bg-white" src={reactIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex  bg-white items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="NextJS framework 5 Logo" className="bg-white" src={nextIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-white items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="TypesScript Language 5 Logo"  className="bg-white" src={tsIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse  flex bg-white items-center justify-center  border-blue-500 p-4 border xs:max-w-[160px] rounded">
            <Image alt="Tailwind CSS Icon" className="bg-white"  src={tailWindIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse  flex bg-white items-center justify-center  border-blue-500 p-4 border xs:max-w-[160px] rounded">
            <Image alt="Microsoft Windos logo"  className="bg-white" src={windowsIcon} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse  flex bg-white items-center justify-center  border-blue-500 p-4 border xs:max-w-[160px] rounded">
            <Image alt="Linux  Logo" className="bg-white"  src={linuxIcon} width={60} height={60}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
