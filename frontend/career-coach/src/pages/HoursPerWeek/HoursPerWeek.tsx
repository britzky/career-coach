import { useEffect } from 'react'
import { InputBox, NavButton } from "../../components"
import { useCareerDetails } from "../../context/CareerContext"

export const HoursPerWeek = () => {
  const {updateCareer, careerDetails} = useCareerDetails()

  // need to add validation before shipping to production
  const handleInputChange = (value: string) => {
    updateCareer('hours_dedicated_to_learning', Number(value))
  }

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <p className="text-purpleText text-base font-bold">How many <span className="bg-hours-per-week gradient-text">hours per week</span> can you dedicate?</p>
        <div className="w-[210px] my-14">
          <InputBox placeholder="40" onChange={handleInputChange} />
        </div>
        <div className="w-[943px]">
          <input
            type="range"
            min="0"
            max="40"
            className="w-full text-purpleText"
          />
        </div>
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton to='/job-level' back>Back</NavButton>
          <NavButton to='/budget'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
