import { SideNav } from "@/components/SideNav";
import { SkillSec } from "@/components/SkillSec";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <div className="flex  justify-between items-center border border-b border-r-0 w-[100%]  ">
        <div className="flex gap-1 ">
          <div className="flex justify-center items-center pt-2  bg-white">
            <Image
              src={
                "https://res.cloudinary.com/debw7vpqa/image/upload/v1721425467/whatbytes_edapra.png"
              }
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </div>
          <div className="flex flex-col pb-1 justify-center items-center text-lg md:text-4xl font-extrabold">
            WhatBytes
          </div>
        </div>

        <div className="p-4 flex gap-6 ">
          <LoginLink
            postLoginRedirectURL="/dashboard"
            
            className=" items-center font-bold rounded-lg flex gap-4 md:border-2 border-2 border-slate-300 py-2 px-2"
          >
            Sign in
          </LoginLink>
          <RegisterLink
            postLoginRedirectURL="/dashboard"
            className="items-center font-bold rounded-lg flex gap-4 md:border-2 border-2 border-slate-300 py-2 px-2"
          >
            Sign up
          </RegisterLink>
        </div>
      </div>

      <div className="h-full flex">
        <SideNav />
        <SkillSec />
      </div>
    </div>
  );
}
