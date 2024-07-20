export function SyllSec() {
  const data = [
    { title: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-500',bgColor:'bg-blue-200', text: 'text-blue-500'},
    { title: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-500',bgColor:'bg-orange-200',text: 'text-orange-500'},
    { title: 'Tables & References in HTML', percentage: 24, color: 'bg-red-500',bgColor:'bg-red-200', text: 'text-red-500'},
    { title: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-500',bgColor:'bg-green-200',text: 'text-green-500'},
  ];

  return (
    <div className="m-3">
      <div className="p-4 lg:p-5 md:p-10 md:ml-4 bg-white border rounded-lg max-w-5xl w-full md:mx-auto h-fit">
      <h2 className="text-xl font-bold mb-10">Syllabus Wise Analysis</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-700 text-lg mb-4 font-semibold">{item.title}</span>
          </div>
          <div className="flex justify-between gap-8 md:gap-10">
            <div className={`w-full ${item.bgColor} rounded-full h-2.5 pr-10`}>
              <div
                className={`${item.color} h-2.5 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span 
            className={`${item.text} flex justify-center items-center font-bold`}>{item.percentage}%</span>
          </div>

        </div>
      ))}
    </div>
    </div>
  );
};
