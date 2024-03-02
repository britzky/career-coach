import { useState, useEffect, ChangeEvent } from 'react' // added useState
import { useNavigate } from 'react-router-dom';
import { Stepper, Step } from '@mui/material';
import { Checkmark } from "../../assets/icons/Checkmark";
import { InputBox, NavButton } from "../../components"
import { useCareerDetails } from "../../context/CareerContext"

const totalSteps = 7;

export const HoursPerWeek = () => {
  const {updateCareer, careerDetails} = useCareerDetails()
  const [hours, setHours] = useState(careerDetails.hours_dedicated_to_learning || 0);
  const [isValidInput, setIsValidInput] = useState(true);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(2);

  // need to add validation before shipping to production
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newHours = Number(event.target.value); {/* added this line */}
    setHours(newHours); {/* changed from setHours(Number(event.target.value)); */}
    updateCareer('hours_dedicated_to_learning', newHours); {/* changed from hours to newHours */}
    setIsValidInput(newHours > 0 && newHours <= 40);
  }

  const handleInputChange = (value: string) => {
    const newHours = Number(value); {/* added this line */}
    setHours(newHours); {/* changed from setHours(Number(value)); */}
    updateCareer('hours_dedicated_to_learning', newHours); {/* changed from hours */}
    setIsValidInput(!isNaN(newHours) && newHours > 0 && newHours <= 40);
  }

  const handleContinueClick = () => {
    if (isValidInput && hours > 0 && hours <= 40) {
      navigate('/budget');
    } else {
      console.log("Please set the slider or input a number between 0 and 40 before continuing.")
    }
  }

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  useEffect(() => {
    setActiveStep(hours > 0 ? 3 : 2);
  }, [hours]);


  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center w-full mt-28">
        <p className="text-purpleText text-xl font-bold">How many <span className="bg-hours-per-week gradient-text">hours per week</span> can you dedicate?</p>
        <div className="w-[210px] my-14 flex items-center">
          <InputBox value={hours} placeholder='0' onChange={handleInputChange} />
          <span className='ml-2'>Hours</span>
        </div>
        <div className="w-[943px] relative">
          <input
            type="range"
            min="0"
            max="40"
            value={hours}
            onChange={handleSliderChange}
            className="w-full text-purpleText"
          />
          <div className='flex justify-between mt-2'>
            <span className='text-purpleText text-base font-bold'>0</span>
            <span className='text-purpleText text-base font-bold'>40</span>
          </div>
        </div>
        <div className="flex justify-between mt-auto mb-10 w-full">
          <NavButton to='/job-level' back>Back</NavButton>
          <div style={{ flexGrow: 1}}>
            <Stepper activeStep={activeStep}>
              {[...Array(totalSteps)].map((_, index) => (
                <Step key={index}>
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeStep > index + 1 ? 'bg-purple' : 'border-2 border-purpleText'}`}>
                    {activeStep >= index + 1 ? <Checkmark /> : index + 1}
                  </div>
                </Step>
              ))}
            </Stepper>
          </div>
          <NavButton disabled={hours === 0} onClick={handleContinueClick}>Continue</NavButton>
        </div>
      </div>
    </div>
  )
}
