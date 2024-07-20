import Image from "next/image"
export function StatisticsSec({ percentile, rank, score }) {
    return (
        <div className="border rounded-lg p-4 md:p-2 lg:p-5 m-3 mt-8">
            <div className="font-extrabold text-xl">
                Quick Statistics
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 justify-between pt-8 px-5 ">
                <div className="flex gap-2  ">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                        <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431427/trophy_zmqz3o.png"}
                             alt = "trophy"
                             width={25}
                             height={25}
                        ></Image>
                        </div>

                    <div className="flex flex-col">
                        <div className="font-bold text-xl">{rank}</div>
                        <div className="font-semibold text-slate-400 text-sm">YOUR RANK</div>
                    </div>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className="flex ">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2">
                        <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431591/note_mrbccd.png"}
                             alt = "note"
                             width={25}
                             height={25}
                        ></Image></div>

                    <div className="pl-5">
                        <div className="font-bold text-xl">{percentile}%</div>
                        <div className="font-semibold text-slate-400 text-sm">PERCENTILE</div>
                    </div>
                </div>
                <div className="w-0.5 bg-slate-300"></div>
                <div className="flex">
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-3">
                    <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431597/checkbox_vrq1se.png"}
                             alt = "checkbox"
                             width={25}
                             height={25}
                        ></Image>
                        </div>
                    <div className="pl-5 ">
                        <div className="font-bold text-xl">{score}/15</div>
                        <div className="font-semibold text-slate-400 text-sm">CORRECT ANSWERS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}