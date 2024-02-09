import { useCareerDetails } from "../../context/CareerContext"

export const Roadmap = () => {
    const { roadmap } = useCareerDetails()
    console.log(roadmap)
  return (
    <div>Roadmap</div>
  )
}
