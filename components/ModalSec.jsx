import { useState } from "react";
import { ModalBox } from "./ModalBox";


export function ModalSec({ rank, setRank, percentile, setPercentile, score, setScore }) {
    const [showUpdateScores, setShowUpdateScores] = useState(false);

    return (
        <div>
            <div onClick={() => setShowUpdateScores(true)} className="bg-blue-900 h-fit p-3 text-md rounded-lg cursor-pointer font-bold text-white px-4 ml-4 mt-2">
                <button>
                    Update
                </button>
            </div>
            {showUpdateScores && <ModalBox
                rank={rank}
                setRank={setRank}
                percentile={percentile}
                setPercentile={setPercentile}
                score={score}
                setScore={setScore}
                onClose={() => setShowUpdateScores(false)}
            />}
        </div>
    );
}
