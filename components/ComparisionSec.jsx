import LineChart from "./LineChart";
import Image from "next/image";

export function ComparisionSec({ percentile, setPercentile }) {
    let comparisonText;

    if (parseInt(percentile) < 72) {
        comparisonText = "lower than";
    } else if (parseInt(percentile) > 72) {
        comparisonText = "greater than";
    } else {
        comparisonText = "equal to";
    }

    return (
        <div className="mt-8 border rounded-lg m-3 p-4 lg:p-5 flex flex-col gap-6">
            <div className="font-extrabold text-xl">
                Comparision Graph
            </div>
            <div>
                <div className="flex justify-between mb-10">
                    <div className="text-gray-600 text-lg w-9/12 md:w-fit md:text-xl font-medium">
                        <span className="font-extrabold">
                            You scored {percentile}% percentile
                        </span>{" "}
                        which is {comparisonText} the <br></br>
                        average percentile 72% of all engineers who took this assessment
                    </div>
                    <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-3">
                        <Image src={"https://res.cloudinary.com/debw7vpqa/image/upload/v1721431660/graph_qvhke4.png"}
                             alt = "graph"
                             width={20}
                             height={20}
                        ></Image>

                    </div>
                </div>
                <div className="w-full">
                    <LineChart percentile = {percentile} setPercentile={setPercentile} />
                </div>
            </div>
        </div>
    );
}
