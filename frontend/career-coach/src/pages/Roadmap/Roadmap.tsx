import { useCareerDetails } from "../../context/CareerContext"
import { CourseAccordion } from "../../components"

export const Roadmap = () => {
    const { roadmap } = useCareerDetails()
    console.log(roadmap)
  return (
    <div className="flex justify-center min-h-screen w-full mt-20">
      <CourseAccordion />
    </div>
  )
}
