import { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import { InputBox, NavButton } from '../../components'
// import InfoIcon from '@mui/icons-material/Info'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useCareerDetails } from '../../context/CareerContext'

const totalSteps = 7;

export const Timeframe = () => {
    const [activeStep, setActiveStep] = useState(5)
//   const { updateCareer } = useCareerDetails();
    const { setMonths, months } = useCareerDetails();

//   const handleInputChange = (value: string) => {
//     updateCareer('timeframe', value)
//   }

    useEffect(() => {
        setActiveStep(5); // Set active step to 6 for step 6
    }, [])

    const tempInputChange = (value: string) => {
        setMonths(Number(value))
    }


console.log(months)
  return (
    <div className="flex justify-center min-h-screen w-full">
        <div className="flex flex-col w-full mt-28">
            <div className="flex justify-center mb-8">
                <p className="text-purpleText text-xl font-bold">What is your expected<span className="bg-timeframe gradient-text"> timeframe</span>?</p>
            </div>
            <div className="flex flex-col items-center">
                <div className='mb-6 w-40 flex justify-center items-center'>
                    <InputBox placeholder='0' onChange={tempInputChange} />
                    <span className='ml-2'>Months</span>
                </div>
            </div>
            <div className='flex flex-col items-center mt-auto mb-10'>
                <h5 className="flex font-medium text-sm text-purpleText mb-6">
                    <span className='mr-2'><ErrorOutlineOutlinedIcon /></span>
                    <span>
                        Attention: Currently, our career roadmaps only support showing the first 3 months.
                        < br/>
                        We intend to increase our ability to show the full roadmap at a later update.
                    </span>
                </h5>
            </div>
            <div className="flex justify-between mb-10">
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
  )
}
