import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, Step } from '@mui/material';
import { Checkmark } from "../../assets/icons/Checkmark";
import { JobCard, NavButton } from '../../components'
import { useCareerDetails } from '../../context/CareerContext';

const totalSteps = 7;

export const DesiredJob = () => {
  const { careerDetails, updateCareer } = useCareerDetails()
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(-1);

  const handleCardClick = (tag: string) => {
    updateCareer('career', tag)
    setSelectedCard(tag)
    // handleNext()
  }

  // const handleInputChange = (value: string) => {
  //   updateCareer('career', value)
  //   setSelectedCard(null)
  // }

  const jobs = [
    'Product Designer',
    'UX Researcher',
    'UI Designer',
    'Full Stack Engineer',
    'Front End Engineer',
    'Back End Engineer',
    'Product Manager',
    'Cloud Developer',
    'Data Scientist',
    'Data Analyst',
    'DevOps Engineer',
    'Android Developer',
    'Software Architect',
    'Blockchain Developer',
    'Cyber Security Analyst',
  ]

  // remove before shipping to production
  useEffect(() => {
    console.log(careerDetails)
  }, [careerDetails])

  useEffect(() => {
    // Count the current step based on whether a selection is made or not
    setActiveStep(selectedCard || careerDetails.career ? 1 : 0);
  }, [selectedCard, careerDetails.career]);

  const handleContinueClick = () => {
    if (selectedCard) {
      navigate('/job-level')
    }
  }
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep +1)
  // }

  // const progress = ((activeStep +1) / totalSteps) * 100;

  return (
    <div className="flex justify-center min-h-screen w-full">
      <div className="flex flex-col items-center mt-28 w-full">
        <div className="flex justify-center mb-8">
          <p className="text-purpleText text-xl font-bold bg-desired-job gradient-text">I want to be a...</p>
        </div>
        <div className="mb-7 flex justify-center">
          {/* <div className="w-[1200px]">
            <InputBox
              placeholder="If you can't find your job below, search it here"
              onChange={handleInputChange}
              border
            />
          </div> */}
        </div>
        <div className="flex flex-col w-[1200px] gap-3 mb-[12px]">
          {jobs.map((job) => (
            <div key={job}>
              <JobCard
                text={job}
                tag={job}
                onCardClick={handleCardClick}
                selected={selectedCard === job}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-auto mb-10 w-full">
          {/* <div className="flex items-center"> */}
            {/* <div className='flex justify-center'> */}
              <NavButton back to='/'>Back</NavButton>
              <div style={{ flexGrow: 1}} className='mx-[30rem]'>
                <Stepper activeStep={activeStep}>
                  {[...Array(totalSteps)].map((_, index) => (
                    <Step key={index}>
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full ${activeStep > index + 1 ? 'bg-purple' : 'border-2 border-purpleText'}`}>
                        {activeStep >= index + 1 ? <Checkmark /> : null}
                      </div>
                    </Step>
                  ))}
                </Stepper>
              </div>
            {/* </div> */}
          {/* </div> */}
          <div className='flex'>
            <NavButton disabled={!selectedCard} onClick={handleContinueClick}>Continue</NavButton>
          </div>
        </div>
      </div>
    </div>
  )
}