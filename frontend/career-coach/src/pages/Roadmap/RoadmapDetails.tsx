import { useCareerDetails } from "../../context/CareerContext"

export const RoadmapDetails = () => {
    const { careerDetails } = useCareerDetails();

  return (
    <div className="border-2 border-purpleText p-2 text-purpleText rounded-lg space-y-3">
        <h1 className="font-bold">Roadmap Details</h1>
        <p className="font-bold">Hours Per Week: <span>{careerDetails.hours_dedicated_to_learning}</span></p>
        <p className="font-bold">Budget: $<span>{careerDetails.budget}</span></p>
        <p className="font-bold">Desired Skills: <span>{careerDetails.skills.join(', ')}</span></p>
        <p className="font-bold">Timeframe: <span>{careerDetails.timeframe} months</span></p>
        <p className="font-bold">Learning Style: <span>{careerDetails.preferred_learning_style}</span></p>
    </div>
  )
}
