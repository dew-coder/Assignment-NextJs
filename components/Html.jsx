
import { ModalSec } from "./ModalSec";
import Image from "next/image";

export function Html({ questions, duration, submittedDate, rank, setRank, percentile, setPercentile, score, setScore }) {
    return (
        <div className="m-3 flex flex-col md:flex-row justify-start border rounded-lg p-1 md:p-2 lg:p-5">
            <div className="flex">
                <div className="w-16 h-16 md:w-32 md:h-24 pt-2 md:pt-">
                    <Image
                        src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431123/html_apn4wf.jpg"}
                        alt="html logo"
                        width={100} height={100}
                    ></Image>

                </div>
                <div className="pt-4 md:pt-4 md:pl-4 flex-grow">
                    <div className="text-xl font-extrabold">
                        Hyper Text Markup Language
                    </div>
                    <div className="hidden md:block text-gray-600 text-sm md:text-md font-semibold pt-3">
                        Questions: {questions} | Duration: {duration} mins | Submitted on {submittedDate}
                    </div>
                    <div className=" md:hidden text-gray-600 text-sm md:text-md font-semibold pt-3">
                        Questions: {questions} | Duration: {duration} mins |<br></br> Submitted on {submittedDate}
                    </div>
                </div>
            </div>
            <div className="w-fit pt-2 pb-4 md:pb-0 md:pt-2 md:pl-4">
                <ModalSec
                    rank={rank}
                    setRank={setRank}
                    percentile={percentile}
                    setPercentile={setPercentile}
                    score={score}
                    setScore={setScore} />
            </div>
        </div>
    )
}
