
import Image from "next/image"

export function ResponsiveNav({ isOpen, setIsOpen }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-100 z-50 h-fit m-24 mr-0 ml-0 p-10 pl-4 flex flex-col gap-4">
            <div className="flex absolute top-6 right-6" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className=" px-6 flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <div className="font-bold text-lg text-white">
                    Dashboard
                </div>
            </div>
            <div className="px-6 flex pr-8 bg-slate-100 rounded-full w-fit items-center space-x-4">
                <div className=" flex space-x-4">
                    <div className="flex justify-center p-1 rounded-full bg-slate-100 items-center w-12 h-12">
                    <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431889/skills_uv5g5a.png"}
                             alt = "sideimg"
                             width={50}
                             height={30}
                             className="bg-slate-100"
                        ></Image>

                    </div>
                    <div className="flex justify-center items-center font-bold text-lg text-blue-800">
                        Skill Test
                    </div>
                </div>
            </div>
            <div className="px-6 flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <div className="font-bold text-lg text-white">
                    Internship
                </div>
            </div>
        </div>
    )
}