import { useCareerDetails } from "../../context/CareerContext"

export const RoadmapDetails = () => {
    const { careerDetails, months } = useCareerDetails();

  return (
    <div className="flex flex-wrap lg:block border-2 border-purpleText p-5 text-purpleText rounded-lg space-y-3 w-full lg:max-w-[300px]">
      <div className="hidden lg:block">
        <h1 className="font-bold">Roadmap Details</h1>
      </div>
      <p className="font-bold">Hours Per Week: <span className="font-normal">{careerDetails.hours_dedicated_to_learning}</span></p>
      <p className="font-bold">Budget: <span className="font-normal">${careerDetails.budget}</span></p>
      <p className="font-bold">Timeframe: <span className="font-normal">{months} months</span></p>
      <p className="font-bold">Learning Style: <span className="font-normal">{careerDetails.preferred_learning_style}</span></p>
    </div>
  )
}
