import { useCareerDetails } from "../../context/CareerContext"

export const Summary = () => {
    const { roadmap, careerDetails } = useCareerDetails()

  return (
    <div className="w-[1100px]">
        <h1 className="text-purpleText font-bold text-lg">{careerDetails.career} Roadmap ({careerDetails.experience})</h1>
        <p className="font-medium text-purpleText text-sm">{roadmap?.summary}</p>
    </div>
  )
}
