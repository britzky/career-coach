import { useCareerDetails } from "../../context/CareerContext"

export const Summary = () => {
    const { roadmap, careerDetails } = useCareerDetails()

  return (
    <div className="-mt-4 w-full mb-10 h-[210px] overflow-hidden">
        <h1 className="text-purpleText font-bold text-lg">{careerDetails.career} Roadmap ({careerDetails.experience})</h1>
        <p className="font-medium text-purpleText text-xs">{roadmap?.summary}</p>
    </div>
  )
}
