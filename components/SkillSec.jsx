"use client"

import { ComparisionSec } from "./ComparisionSec";
import { Html } from "./Html";
import { QuestionSec } from "./QuestionSec";
import { StatisticsSec } from "./StatisticsSec";
import { SyllSec } from "./SyllSec";
import { useEffect, useState } from "react";
import { ResponsiveNav } from "./ResponsiveNav";

export function SkillSec() {
    const [rank, setRank] = useState(0);
    const [percentile, setPercentile] = useState(0);
    const [score, setScore] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        console.log("Rank, percentile, or score changed");
    }, [rank, percentile, score]);

    return (
        <div className="md:p-16 md:pt-5 flex-grow">
            <div className="p-4 md:p-0 text-slate-500 font-semibold text-xl md:pb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    onClick={() => { setIsOpen(true) }}
                    className="md:hidden pb-2 size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {isOpen && <ResponsiveNav isOpen={isOpen} setIsOpen={setIsOpen}  />}
                Skill test
            </div>
            <div className="flex flex-col md:flex-row ">
                <div className="w-screen md:w-2/3 mb-6 md:mb-0 md:pr-0">
                    <Html
                        questions="08"
                        duration="15"
                        submittedDate="5 June 2021"
                        rank={rank}
                        setRank={setRank}
                        percentile={percentile}
                        setPercentile={setPercentile}
                        score={score}
                        setScore={setScore}
                    />
                    <StatisticsSec
                        rank={rank}
                        percentile={percentile}
                        score={score}
                    />
                    <ComparisionSec percentile={percentile} setPercentile={setPercentile} />
                </div>
                <div className="w-screen md:w-1/2 md:pl-0">
                    <SyllSec />
                    <QuestionSec score={score} />
                </div>
            </div>
        </div>
    );
}
