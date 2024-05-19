import { useCareerDetails } from "../../context/CareerContext"

export const Summary = () => {
    const { roadmap, careerDetails } = useCareerDetails()

  return (
    <div className="-mt-4 w-full mb-5 lg:h-[230px] overflow-hidden">
        <h1 className="text-purpleText font-bold text-xs lg:text-lg">{careerDetails.career} Roadmap ({careerDetails.experience})</h1>
        <p className="font-medium text-purpleText text-xxxs lg:text-xs">{roadmap?.summary}</p>
    </div>
  )
}
