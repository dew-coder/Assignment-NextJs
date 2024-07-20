import { Pie } from "./Pie";

export function QuestionSec({ score }) {
  return (
    <div className="m-3 md:m-0">
      <div className="p-4 lg:p-5 md:p-10 md:ml-4 mt-8 flex flex-col bg-white border rounded-lg max-w-5xl w-full md:mx-auto h-fit">
        <div className="flex justify-between">
          <div className="text-xl font-bold mb-10">Question Analysis</div>
          <div className="text-blue-800 font-extrabold">{score}/15</div>
        </div>
        <div className="text-gray-600 text-xl font-medium">
          <span className="font-extrabold">You scored {score} questions correct out of 15.</span>{" "} However it still needs
          some improvements
        </div>
        <div className="flex justify-center items-center w-full h-80 md:h-96">
          <Pie correctAnswers={score} />
        </div>
      </div>
    </div>
  )
}