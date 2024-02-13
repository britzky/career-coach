import { useCareerDetails } from "../../context/CareerContext"
import { CourseAccordion } from "../../components"
import { RoadmapDetails } from "./RoadmapDetails"
import { Overview } from "./Overview"

export const Roadmap = () => {
    const { roadmap, careerDetails } = useCareerDetails()
    console.log(roadmap)
  return (
    <div className="flex justify-center min-h-screen w-full mt-20">
      <div className="flex flex-col">
        <RoadmapDetails />
        <Overview />
      </div>
      <div>
        <h1>{careerDetails.career} Roadmap</h1>
        <p>{roadmap?.summary}</p>
        <CourseAccordion />
      </div>
    </div>
  )
}
