// import { useState } from "react"
// import { useCareerDetails } from "../../context/CareerContext";

// export const Overview = () => {
//     const [selectedMonth, setSelectedMonth] = useState<number>();
//     const { roadmap } = useCareerDetails()

//     const handleCircleClick = (monthIndex: number) => {
//         if (monthIndex === 0 && selectedMonth === 0) {
//           setSelectedMonth(-1)
//         } else {
//           setSelectedMonth(monthIndex)
//         }
//       }

//       const months = [{ "month": "month 1"}, {"month" :"month 2"}, {"month" : "month 3"}]

//   return (
//     <div className="lg:border-2 border-purpleText lg:py-2 lg:pr-24 lg:pl-5 rounded-lg lg:max-w-[300px] w-full">
//       <p className="text-xxs lg:text-base font-bold mb-4 text-purpleText text-center lg:text-left">Overview</p>
//       <div className="flex relative justify-between lg:flex-col lg:block">
//         {months.map((item, i) => (
//           <div key={i} className="lg:flex">
//             <div className="hidden w-full lg:block">
//               <span className="text-xs flex-1 font-medium">{item.month}</span>
//             </div>
//             <div className="lg:relative flex lg:flex lg:items-center">
//               {i <= (selectedMonth ?? -1) ? (
//                 <div onClick={() => handleCircleClick(i)} className="w-6 h-6 bg-indigo-700 border-2 border-purpleText rounded-full flex items-center justify-center text-white z-50 cursor-pointer">
//                     <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
//                 </div>
//               ) : (
//                 <div onClick={() => handleCircleClick(i)} className="w-6 h-6 bg-buttonWhite border-2 border-purpleText rounded-full flex items-center justify-center text-white z-50 cursor-pointer"></div>
//                 )}
//               {i < roadmap?.roadmap.length - 1 && (
//                 <div className={`absolute h-1 w-full lg:w-1 lg:h-6 top-1/2 lg:top-full lg:left-1/2 right-0 transform -translate-y-1/2 lg:-translate-x-1/2 ${i <= (selectedMonth ?? -1) ? 'bg-purpleText z-10': 'bg-line z-10'}`}></div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between">
//         {roadmap?.roadmap.map((item, i) => (
//           <div key={i} className="lg:hidden">
//             <span className="text-xxs flex-1 font-medium">{item.month}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
