import { useCareerDetails } from "../../context/CareerContext"
import { CourseAccordion } from "../../components"
import { RoadmapDetails } from "./RoadmapDetails"

export const Roadmap = () => {
    const { roadmap } = useCareerDetails()
    console.log(roadmap)
  return (
    <div className="flex justify-center min-h-screen w-full mt-20">
      <div>
        <RoadmapDetails />
        <p>{roadmap?.summary}</p>
      </div>
      <CourseAccordion />
    </div>
  )
}
