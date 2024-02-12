import { useState, useEffect } from 'react' // added useState
import { InputBox, NavButton } from "../../components"
import { useCareerDetails } from "../../context/CareerContext"

export const HoursPerWeek = () => {
  const {updateCareer, careerDetails} = useCareerDetails()
  const [hours, setHours] = useState(careerDetails.hours_dedicated_to_learning || 0); // added this line

  // Updates the input box value when the slider changes
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setHours(value);
    updateCareer('hours_dedicated_to_learning', value);
  }

  // Update the slider value when the input box changes
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setHours(value);
    updateCareer('hours_dedicated_to_learning', value);
  }

  // need to add validation before shipping to production
  // const handleInputChange = (value: string) => {
  //   updateCareer('hours_dedicated_to_learning', Number(value))
  // }

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  return (
    <div className="flex justify-center min-h-screen w-full mt-14">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <p className="text-purpleText text-base font-bold">How many <span className="bg-hours-per-week gradient-text">hours per week</span> can you dedicate?</p>
        <div className="w-[210px] my-14 flex items-center">
          <InputBox value={hours} placeholder="0" onChange={handleInputChange} />
          <span className='ml-2'>hours</span>
        </div>
        <div className="w-[943px] relative"> {/* added relative */}
          <input
            type="range"
            min="0"
            max="40"
            value={hours} // added this line
            onChange={handleSliderChange} // added this line
            className="w-full text-purpleText"
          />
          <div className='flex justify-between mt-2'> {/* added this whole div */}
            <span className='text-purpleText text-base font-bold'>0</span>
            <span className='text-purpleText text-base font-bold'>40</span>
          </div> 
        </div>
        <div className="flex justify-between mt-40 w-[1200px]">
          <NavButton to='/job-level' back>Back</NavButton>
          <NavButton to='/budget'>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
