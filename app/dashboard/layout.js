// import { Inter } from "next/font/google";
import Image from "next/image";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

// const inter = Inter({ subsets: ["latin"] });

export default async function DashLayout({ children }) {
    const {getUser} = getKindeServerSession();
    const user = await getUser() || "user";

  return (
    // <html lang="en">

      <div>
      <div className="flex  justify-between items-center border border-b border-r-0 w-[100%]  ">
        <div className="flex gap-1 ">
            <div className="flex justify-center items-center pt-2  bg-white">
                <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721425467/whatbytes_edapra.png"} width={100} height={100} alt="logo" ></Image>
            </div>
            <div className="flex flex-col pb-1 justify-center items-center text-lg md:text-4xl font-extrabold">
                WhatBytes
            </div>
        </div>

        <div className="p-4 flex gap-6 ">
        <LogoutLink className="items-center font-bold rounded-lg flex gap-4 border-2 md:border-2 border-slate-300 py-2 px-2">Log out</LogoutLink>

            <div className="rounded-lg flex gap-4 md:border-2 border-slate-300 py-2 px-2">
                <div>
                    <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721493070/userimg_oa8nfw.png"}                    
                     className="w-10 h-10 rounded-full object-cover"
                    width={50} height={50} alt="my icon"
                    ></Image>
                </div>
                <div className="md:block pt-1 first-line:justify-center font-bold text-md md:text-lg lg:text-xl first:items-center">
                    {user && user.given_name}
                </div>
            </div>

        </div>
        </div>

        {children}
        </div>
    // </html>
  );
}
