import { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import { InputBox, NavButton } from '../../components'
import InfoIcon from '@mui/icons-material/Info'
// import { useCareerDetails } from '../../context/CareerContext'

const totalSteps = 7;

export const Timeframe = () => {
    const [activeStep, setActiveStep] = useState(5)
//   const { updateCareer } = useCareerDetails();

//   const handleInputChange = (value: string) => {
//     updateCareer('timeframe', value)
//   }

    useEffect(() => {
        setActiveStep(5); // Set active step to 6 for step 6
    }, [])

  return (
    <div className="flex justify-center min-h-screen w-full">
        <div className="flex flex-col mt-28">
            <div className="flex justify-center mb-8">
                <p className="text-purpleText text-xl font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
            </div>
            <div className="flex flex-col items-center">
                <div className='mb-6 w-40 flex justify-center items-center'>
                    <InputBox placeholder='3'/>
                    <span className='ml-2'>Months</span>
                </div>
            </div>
            <div className="mt-auto mb-10">
                <h5 className="font-medium text-sm text-purpleText mb-10">
                    <span className='mr-2'><InfoIcon /></span>
                    The scope of our career roadmap is restricted to a 3 month timeframe,
                    which will increase in a later update.
                    Kindly consider this limitation when setting your career goals.
                </h5>
                <div className="flex justify-between">
                    <NavButton back to='/learning-style'>Back</NavButton>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {[...Array(totalSteps)].map((_, index) => (
                            <Step key={index}>
                                <StepLabel></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <NavButton to='/skill-level'>Continue</NavButton>
                </div>
            </div>
        </div>
    </div>
  )
}
